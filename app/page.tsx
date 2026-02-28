"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  rawTopics,
  type Topic,
  type QuizQuestion,
  type RawQuestion,
} from "./data/topics";

type Attempt = {
  topicId: string;
  topicTitle: string;
  score: number;
  total: number;
  percent: number;
  timestampISO: string;
  badge: string;
};

const ATTEMPT_KEY = "quiz_attempts";

/** Randomization helpers */
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuizQuestions(raw: RawQuestion[]): QuizQuestion[] {
  const shuffledQuestions = shuffle(raw);
  return shuffledQuestions.map((q) => {
    const options = shuffle([q.correct, ...q.wrong]);
    return {
      q: q.q,
      options,
      answerIndex: options.indexOf(q.correct),
      explanation: q.explanation,
    };
  });
}

function loadAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Attempt[]) : [];
  } catch {
    return [];
  }
}

function saveAttempt(a: Attempt) {
  const all = loadAttempts();
  all.unshift(a);
  localStorage.setItem(ATTEMPT_KEY, JSON.stringify(all.slice(0, 200)));
}

function badgeForPercent(p: number) {
  if (p >= 90)
    return { label: "PM Ace", emoji: "🏆", pill: "bg-amber-100 text-amber-800 border-amber-200", titleClass: "text-amber-600" };
  if (p >= 75)
    return { label: "Strong Builder", emoji: "🚀", pill: "bg-indigo-100 text-indigo-800 border-indigo-200", titleClass: "text-indigo-600" };
  if (p >= 50)
    return { label: "Solid Start", emoji: "✅", pill: "bg-emerald-100 text-emerald-800 border-emerald-200", titleClass: "text-emerald-600" };
  return { label: "Keep Going", emoji: "💪", pill: "bg-slate-100 text-slate-800 border-slate-200", titleClass: "text-slate-600" };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}

export default function Home() {
  const quizRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  // Topics for dropdown
  const topicList: Topic[] = useMemo(
    () =>
      rawTopics.map((t) => ({
        id: t.id,
        title: t.title,
        linkedinUrl: t.linkedinUrl,
        pdfUrl: t.pdfUrl,
        questions: [],
      })),
    []
  );

  // Topic selection
  const [query, setQuery] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    topicList.length === 1 ? topicList[0].id : ""
  );

  const selectedTopic = useMemo(
    () => topicList.find((t) => t.id === selectedTopicId),
    [topicList, selectedTopicId]
  );

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topicList;
    return topicList.filter((t) => t.title.toLowerCase().includes(q));
  }, [query, topicList]);

  // Quiz state
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    setAttempts(loadAttempts());
  }, []);

  // Reset when topic changes
  useEffect(() => {
    setStarted(false);
    setCompleted(false);
    setIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setQuizQuestions([]);
  }, [selectedTopicId]);

  const total = quizQuestions.length;
  const currentQ = quizQuestions[index];

  const progressPercent =
    total > 0 ? Math.round(((index + 1) / total) * 100) : 0;

  const score = useMemo(() => {
    return answers.reduce((acc, ans, i) => {
      const correct = quizQuestions[i]?.answerIndex;
      return acc + (ans === correct ? 1 : 0);
    }, 0);
  }, [answers, quizQuestions]);

  const finalPercent = total > 0 ? Math.round((score / total) * 100) : 0;
  const badge = badgeForPercent(finalPercent);

  const topicAttempts = useMemo(() => {
    if (!selectedTopicId) return [];
    return attempts.filter((a) => a.topicId === selectedTopicId).slice(0, 10);
  }, [attempts, selectedTopicId]);

  function scrollTo(el: HTMLElement | null) {
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startQuiz() {
    if (!selectedTopicId) return;

    const rawTopic = rawTopics.find((t) => t.id === selectedTopicId);
    const built = rawTopic ? buildQuizQuestions(rawTopic.questions) : [];

    setQuizQuestions(built);
    setStarted(true);
    setCompleted(false);
    setIndex(0);
    setSelectedOption(null);
    setAnswers([]);

    setTimeout(() => scrollTo(quizRef.current), 120);
  }

  function retry() {
    startQuiz(); // new random attempt
  }

  function back() {
    if (index === 0) return;
    setIndex((i) => i - 1);
    const prev = answers[index - 1];
    setSelectedOption(typeof prev === "number" ? prev : null);
  }

  function next() {
    if (selectedOption === null) return;

    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);

    const lastQuestion = index === total - 1;
    if (lastQuestion) {
      const finalScore = newAnswers.reduce((acc, ans, i) => {
        const correct = quizQuestions[i]?.answerIndex;
        return acc + (ans === correct ? 1 : 0);
      }, 0);

      const percent = total > 0 ? Math.round((finalScore / total) * 100) : 0;
      const b = badgeForPercent(percent);

      const attempt: Attempt = {
        topicId: selectedTopicId,
        topicTitle: selectedTopic?.title ?? "Topic",
        score: finalScore,
        total,
        percent,
        timestampISO: new Date().toISOString(),
        badge: b.label,
      };

      saveAttempt(attempt);
      setAttempts(loadAttempts());

      setCompleted(true);
      setStarted(false);

      setTimeout(() => scrollTo(resultRef.current), 120);
      return;
    }

    setIndex((i) => i + 1);
    setSelectedOption(null);
  }

  return (
    <main
      className="min-h-screen p-8 md:p-14"
      style={{
        background:
        "radial-gradient(900px circle at 8% 12%, rgba(59,130,246,0.14), transparent 58%), radial-gradient(900px circle at 92% 12%, rgba(168,85,247,0.12), transparent 58%), #fafafa",
      }}
    >
      <div className="mx-auto max-w-4xl bg-emerald-50/60">
        {/* HERO / START SCREEN */}
        <div className="rounded-[28px] border border-indigo-100/80 bg-stone-50/90 backdrop-blur-xl shadow-[0_14px_45px_rgba(99,102,241,0.06),0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="p-7 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50/90 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Learn → Quiz → Score → Repeat
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 bg-clip-text text-transparent">
                PM Quiz Studio
              </span>
            </h1>

            <p className="mt-3 text-slate-600 text-base md:text-lg">
              Short, educational MCQs. <span className="font-semibold text-slate-800">No login.</span>
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2 items-stretch">
              {/* Topic card */}
              <div className="rounded-3xl border-2 border-fuchsia-200/80 bg-stone-50/90 backdrop-blur p-6 shadow-sm ring-1 ring-black-50/50">
                <div className="text-sm font-semibold text-indigo-900">
                  1) Select a topic
                </div>

                {topicList.length > 1 && (
                  <input
                    className="mt-3 w-full rounded-xl border border-indigo-200/70 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 transition"
                    placeholder="Search topics…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                )}

                <select
                  className="mt-3 w-full rounded-xl border border-indigo-200/70 bg-white px-4 py-3 text-slate-800 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 transition"
                  value={selectedTopicId}
                  onChange={(e) => setSelectedTopicId(e.target.value)}
                >
                  <option value="" disabled>
                    {topicList.length === 1 ? "Topic selected" : "Choose a topic"}
                  </option>
                  {filteredTopics.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>

                {selectedTopic && (
                  <div className="mt-4 grid gap-2">
                    <a
                      href={selectedTopic.linkedinUrl}
                      target="_blank"
                      className="rounded-xl bg-slate-50 border border-indigo-200 px-4 py-3 font-semibold text-indigo-800 text-center hover:bg-indigo-100 hover:border-indigo-300 transition"
                    >
                      📌 Open LinkedIn Post
                    </a>
                  </div>
                )}
              </div>

              {/* Start card (NO rainbow background) */}
              <div className="rounded-3xl border-2 border-fuchsia-200/80 bg-stone-50/90 backdrop-blur p-6 shadow-sm ring-1 ring-black-50/50">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    2) Start the quiz
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                    Learn . Test . Improve
                  </p>

                  {selectedTopicId ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs font-semibold rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-indigo-700">
                        15 questions
                      </span>
                      <span className="text-xs font-semibold rounded-full bg-fuchsia-50 border border-fuchsia-100 px-3 py-1 text-fuchsia-700">
                        Unlimited retries
                      </span>
                      <span className="text-xs font-semibold rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-emerald-700">
                        Attempt history
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 text-sm text-slate-500">
                      Select a topic to unlock the quiz.
                    </div>
                  )}
                </div>

                <button
                  onClick={startQuiz}
                  disabled={!selectedTopicId}
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500 text-white px-6 py-4 font-extrabold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-105 disabled:opacity-40 disabled:shadow-none transition"
                >
                  ▶ Start Quiz
                </button>

                <div className="mt-3 text-xs text-slate-500">
                  Attempts are saved on this device.
                </div>
              </div>
            </div>
          </div>

          {/* QUIZ SECTION */}
          <div className="border-t border-slate-200/80 bg-slate-50/30 p-7 md:p-10" ref={quizRef}>
            {selectedTopicId && started && currentQ && (
              <div className="rounded-3xl border-2 border-indigo-200/80 bg-white/90 backdrop-blur p-6 shadow-md shadow-indigo-500/5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Question {index + 1}/{total}
                    </span>{" "}
                    • Progress {progressPercent}%
                  </div>

                  <span className="text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-50 to-fuchsia-50 border border-indigo-200 px-3 py-1 text-indigo-700">
                  </span>
                </div>

                <div className="mt-3 h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500 transition-all duration-300 shadow-[0_6px_16px_rgba(99,102,241,0.18)]"                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="mt-7 text-xl md:text-2xl font-extrabold text-slate-900">
                  {currentQ.q}
                </div>

                <div className="mt-5 grid gap-3">
                  {currentQ.options.map((opt, i) => {
                    const isSelected = selectedOption === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedOption(i)}
                        className={[
                          "group text-left rounded-2xl border px-5 py-4 transition",
                          "hover:-translate-y-[1px] active:translate-y-0",
                          "focus:outline-none focus:ring-2 focus:ring-indigo-400",
                          isSelected
                            ? "border-indigo-400 bg-indigo-50 ring-2 ring-indigo-200 shadow-[0_12px_24px_rgba(99,102,241,0.12)]"
                            : "border-slate-200 bg-white hover:bg-indigo-50/40 hover:border-indigo-200 hover:shadow-sm",
                        ].join(" ")}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-slate-900 font-semibold">{opt}</div>
                          <div
                            className={[
                              "shrink-0 mt-0.5 h-7 w-7 rounded-full border flex items-center justify-center text-sm transition",
                              isSelected
                                ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                                : "border-slate-300 text-slate-300 group-hover:border-indigo-300 group-hover:text-indigo-500",
                            ].join(" ")}
                            aria-hidden
                          >
                            ✓
                          </div>
                        </div>
                        {isSelected && (
                          <div className="mt-2 text-sm text-indigo-700 font-semibold">
                            Selected
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-7 flex items-center justify-between gap-3">
                  <button
                    onClick={back}
                    disabled={index === 0}
                    className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition"
                  >
                    Back
                  </button>

                  <button
                    onClick={next}
                    disabled={selectedOption === null}
                    className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-7 py-3 font-extrabold shadow-md shadow-indigo-500/20 disabled:opacity-40 hover:brightness-105 hover:shadow-lg active:scale-[0.99] transition"
                  >
                    {index === total - 1 ? "Finish 🎉" : "Next →"}
                  </button>
                </div>
              </div>
            )}

            {/* RESULTS SECTION (NO rainbow background) */}
            {selectedTopicId && completed && (
              <div
                ref={resultRef}
                className="rounded-3xl border-2 border-fuchsia-200/80 bg-stone-50/90 backdrop-blur p-6 shadow-sm ring-1 ring-black-50/50"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-sm font-semibold text-slate-600">
                      Result • {selectedTopic?.title}
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shadow-sm">
                        <span className="text-2xl">{badge.emoji}</span>
                      </div>

                      <div className={`text-3xl md:text-4xl font-extrabold ${badge.titleClass}`}>
                        {badge.label}
                      </div>
                    </div>

                    <div className="mt-2 text-slate-600">
                      <span className="font-extrabold text-slate-900">
                        Score: {score}/{total}
                      </span>{" "}
                      • {finalPercent}%
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm font-extrabold bg-slate-50">
                      <span className="text-slate-600">Badge:</span>
                      <span className={`rounded-full border px-3 py-1 ${badge.pill}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={retry}
                      className="rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500 text-white px-6 py-3 font-extrabold shadow-md shadow-indigo-500/25 hover:brightness-105 transition"
                    >
                      Retry
                    </button>
                    <button
                      onClick={() => {
                        setCompleted(false);
                        setStarted(false);
                        setTimeout(
                          () => window.scrollTo({ top: 0, behavior: "smooth" }),
                          80
                        );
                      }}
                      className="rounded-xl border border-slate-200 px-6 py-3 font-extrabold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition"
                    >
                      Back to start
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-lg font-extrabold text-slate-900">
                    Attempt history
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Last {Math.min(10, topicAttempts.length)} attempts on this device
                  </div>

                  {topicAttempts.length === 0 ? (
                    <div className="mt-4 text-slate-500">No attempts yet.</div>
                  ) : (
                    <div className="mt-4 grid gap-2">
                      {topicAttempts.map((a, idx) => (
                        <div
                          key={idx}
                            className="rounded-2xl border border-slate-200 bg-stone-50/90 px-4 py-3 flex items-center justify-between hover:bg-stone-100/90 hover:shadow-sm transition"
                        >
                          <div className="text-sm text-slate-600">
                            {formatDate(a.timestampISO)}
                          </div>
                          <div className="font-extrabold text-amber-900">
                            {a.score}/{a.total}{" "}
                            <span className="text-slate-600 font-semibold">
                              ({a.percent}%)
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 text-xs text-slate-500">
                  Note: attempt history is saved locally (no login).
                </div>
              </div>
            )}

            {/* Idle state */}
            {selectedTopicId && !started && !completed && (
              <div className="mt-6 rounded-3xl border-2 border-indigo-200/80 bg-white/90 backdrop-blur p-6 shadow-sm border-indigo-100">
                <div className="text-slate-600">
                  You’re ready. Click <span className="font-semibold text-slate-800">Start Quiz</span> above.
                </div>
              </div>
            )}

            {!selectedTopicId && (
              <div className="text-slate-500">Select a topic above to begin.</div>
            )}
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500 text-center">
          Built for learning. Weekly new quizzes coming. ✨
        </div>
      </div>
    </main>
  );
}