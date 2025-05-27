import { motion } from "motion/react"
import { SimpleIcon } from "./simple-icon"

export function HeaderButton() {
  return (
    <motion.button
      id="theme-btn"
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-auto h-8 w-8 rounded p-1 cursor-pointer"
      whileHover={{ scale: 1.2 }}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"   
        className="text-gray-900 dark:text-gray-100"
      > */}
      <a href="https://github.com/muu86">
        <SimpleIcon slug="github" className="invert-0 dark:invert" />
      </a>
      {/* </svg> */}
    </motion.button>
  )
}
