import React from "react"

export default function ImageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={
        "mx-auto hidden max-h-[500px] max-w-7xl overflow-hidden px-8 lg:block"
      }
    >
      <div
        className={
          "h-fit w-fit rounded-4xl border-2 border-neutral-300 bg-white p-1 shadow-lg"
        }
      >
        <div className={"h-fit w-fit rounded-[28px] bg-white p-1 shadow-inner"}>
          <div
            className={
              "h-fit w-fit overflow-clip rounded-3xl border-2 border-neutral-200 bg-neutral-50"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
