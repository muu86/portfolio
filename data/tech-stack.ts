export type Tech = {
  name: string
  slug: string
}

export const techs: Tech[][] = [
  [
    { slug: "typescript", name: "TypeScript" },
    { slug: "nestjs", name: "NestJS" },
    { slug: "nodedotjs", name: "Node.js" },
  ],
  [
    { slug: "openjdk", name: "Java" },
    { slug: "spring", name: "Spring" },
    { slug: "springboot", name: "SpringBoot" },
  ],
  [
    { slug: "python", name: "Python" },
    { slug: "numpy", name: "Numpy" },
    { slug: "pandas", name: "Pandas" },
    { slug: "tensorflow", name: "Tensorflow" },
    { slug: "yolo", name: "Yolo" },
  ],
  [
    { slug: "react", name: "React" },
    { slug: "nextdotjs", name: "Next.js" },
  ],
  [
    { slug: "mysql", name: "MySQL" },
    { slug: "", name: "Oracle" },
    { slug: "redis", name: "Redis" },
  ],
  [
    { slug: "jest", name: "Jest" },
    { slug: "junit5", name: "JUnit" },
  ],
  [
    { slug: "nginx", name: "Nginx" },
    { slug: "firebase", name: "Firebase" },
    { slug: "docker", name: "Docker" },
    { slug: "kubernetes", name: "Kubernetes" },
    { slug: "amazonwebservices", name: "AWS" },
  ],
  [
    { slug: "git", name: "Git" },
    { slug: "github", name: "GitHub" },
  ],
  [
    { slug: "intellijidea", name: "Intellij" },
    { slug: "eclipseide", name: "Eclipse" },
    { slug: "webstorm", name: "WebStorm" },
    { slug: "", name: "VS Code" },
    { slug: "neovim", name: "Neovim" },
  ],
]

export const learningTechs: Tech[][] = [
  [
    { slug: "dart", name: "Dart" },
    { slug: "flutter", name: "Flutter" },
    { slug: "android", name: "Android" },
    { slug: "swift", name: "Swift" },
  ],
  [
    { slug: "prisma", name: "Prisma" },
    { slug: "drizzle", name: "Drizzle" },
  ],

  [
    { slug: "postgresql", name: "PostgreSQL" },
    { slug: "supabase", name: "Supabase" },
    { slug: "", name: "Qdrant" },
  ],
  [
    { slug: "unity", name: "Unity" },
    { slug: "opengl", name: "OpenGL" },
    { slug: "threedotjs", name: "Three.js" },
    { slug: "webgpu", name: "WebGPU" },
  ],
  [
    { slug: "rust", name: "Rust" },
    { slug: "tauri", name: "Tauri" },
  ],
  [
    { slug: "webflow", name: "Webflow" },
    { slug: "figma", name: "Figma" },
  ],
  [
    { slug: "androidstudio", name: "Android Studio" },
    { slug: "xcode", name: "Xcode" },
  ],
  [
    { slug: "sentry", name: "Sentry" },
    { slug: "vercel", name: "Vercel" },
    { slug: "graphql", name: "GraphQL" },
    { slug: "d3", name: "D3" },
  ],
]
