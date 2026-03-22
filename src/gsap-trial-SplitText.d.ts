/**
 * GSAP SplitText is a Club GSAP plugin — no official .d.ts ships with gsap-trial.
 * Minimal typings for our usage only.
 */
declare module "gsap-trial/SplitText" {
  type SplitTextTarget = Element | string | ReadonlyArray<Element | string>;

  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    [key: string]: unknown;
  }

  export class SplitText {
    lines: Element[];
    words: Element[];
    chars: Element[];
    constructor(target: SplitTextTarget, vars?: SplitTextVars);
    revert(): void;
  }
}
