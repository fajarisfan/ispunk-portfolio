"use client";

export function Banner() {
  const text = "DO IT YOURSELF // PUNK IS ATTITUDE // DIY OR DIE // CODE IT YOURSELF // "
  const repeated = text.repeat(6);

  return (
    <div className="punk-banner" aria-hidden="true">
      <span className="marquee">{repeated}</span>
    </div>
  );
}
