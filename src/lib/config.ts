const nexo = (name: string) => `/images/nexo-${name}.svg` as const;
/** Nexo (the ghost mascot) poses -> files in /public/images. Rename a file or change a path here to swap a pose. */
export const POSES = {
  hi: nexo("hi"), code: nexo("code"), debug: nexo("debug"), sleep: nexo("sleep"),
  terminal: nexo("terminal"), coffee: nexo("coffee"), ui: nexo("ui"), repair: nexo("repair"),
  error: nexo("error"), research: nexo("research"), "late-night": nexo("late-night"), glitch: nexo("glitch"),
} as const;
export type Pose = keyof typeof POSES;
