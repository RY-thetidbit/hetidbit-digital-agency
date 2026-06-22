"use client";

import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const VIDEOS = [
  {
    src: "https://res.cloudinary.com/thetidbit23024/video/upload/v1782153445/vid/video_for_my_website_building_1_hkxbpg.mp4",
    poster:
      "https://res.cloudinary.com/thetidbit23024/video/upload/so_0/v1782153445/vid/video_for_my_website_building_1_hkxbpg.jpg",
    label: "How a website helps you grow",
    shortTitle: "Grow your business",
  },
  {
    src: "https://res.cloudinary.com/thetidbit23024/video/upload/v1782153271/vid/video_for_my_website_building_cggohl.mp4",
    poster:
      "https://res.cloudinary.com/thetidbit23024/video/upload/so_0/v1782153271/vid/video_for_my_website_building_cggohl.jpg",
    label: "Why your business needs a website",
    shortTitle: "Why go online",
  },
] as const;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);

  const current = VIDEOS[currentIndex];
  const hasMultiple = VIDEOS.length > 1;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !inView) return;
    video.muted = muted;
    void video.play().catch(() => {
      /* Autoplay may be blocked until user interaction. */
    });
  }, [inView, muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      playVideo();
    } else {
      video.pause();
    }
  }, [inView, muted, currentIndex, playVideo]);

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % VIDEOS.length);
  };

  const handleEnded = () => {
    if (hasMultiple) goToNext();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (video) {
      video.muted = next;
      if (!next) void video.play();
    }
  };

  return (
    <section id="why-video" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-10 text-center">
          <span className="section-label mx-auto">Why it matters</span>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Every business needs a website —{" "}
            <span className="text-gradient-gold">here&apos;s why</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Watch how going online helps you reach more customers, build trust,
            and grow — even if you&apos;re just starting out.
          </p>
        </Reveal>

        <Reveal variant="scale" delay={120} className="relative mx-auto max-w-4xl">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 via-cyan/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-surface-elevated p-1 shadow-[0_24px_60px_-20px_rgba(5,150,105,0.35)] md:rounded-3xl md:p-1.5">
            <div className="relative aspect-video overflow-hidden rounded-[1.1rem] bg-foreground/5 md:rounded-[1.4rem]">
              <video
                key={current.src}
                ref={videoRef}
                className="h-full w-full object-cover"
                src={current.src}
                poster={current.poster}
                autoPlay
                muted={muted}
                playsInline
                preload="metadata"
                aria-label={current.label}
                onEnded={handleEnded}
                onLoadedData={playVideo}
              />

              <button
                type="button"
                onClick={toggleMute}
                className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/60 text-white backdrop-blur-sm transition-colors hover:bg-foreground/80"
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

            </div>

            {hasMultiple && (
              <div className="grid gap-2 p-3 sm:grid-cols-2 md:p-4">
                {VIDEOS.map((video, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={video.src}
                      type="button"
                      onClick={() => goToVideo(index)}
                      className={`flex items-center gap-3 rounded-xl border p-2 text-left transition-all ${
                        isActive
                          ? "border-gold/50 bg-gold/5 ring-1 ring-gold/20"
                          : "border-border bg-background hover:border-gold/30 hover:bg-surface"
                      }`}
                      aria-label={`Play video ${index + 1}: ${video.label}`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg bg-foreground/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={video.poster}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                        <span
                          className={`absolute inset-0 flex items-center justify-center bg-foreground/30 ${
                            isActive ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <Play size={18} className="text-white" fill="white" />
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-gold">
                          Video {index + 1}
                        </span>
                        <span className="block text-sm font-medium leading-snug text-foreground">
                          {video.shortTitle}
                        </span>
                        <span className="mt-0.5 line-clamp-2 text-xs text-muted">
                          {video.label}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>

        {/* Capture the warmed-up visitor — funnel CTA only (no WhatsApp here;
            WhatsApp is already covered by the nav + floating button). */}
        <Reveal delay={200} className="mt-10 text-center">
          <p className="text-lg font-medium text-foreground">
            Convinced? Get your business online in 3–5 days.
          </p>
          <a href="#included" className="btn-primary mt-5 inline-flex">
            See Everything You Get
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
