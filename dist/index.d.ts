export declare function message(message: string, file?: string, line?: number): void
export declare function warn(message: string, file?: string, line?: number): void
export declare function fail(message: string, file?: string, line?: number): void
export declare function markdown(message: string, file?: string, line?: number): void
declare function ignore(message: string, file?: string, line?: number): void
import { CLIEngine, Linter } from "eslint"
interface OutputMessage {
  /** Which danger-reporter would originally have been used for a message of this severity */
  suggestedReporter: typeof message | typeof warn | typeof fail | typeof markdown | typeof ignore
  /** A preformatted string */
  formattedMessage: string
  /** The file-path in which the error occurred */
  filePath: string
  /** The line number on which the error started */
  line: number
  /** eslint might have an auto-fix, or one or more Suggestions */
  hasFixesOrSuggestions: boolean
  /** The raw message out of eslint */
  linterMessage: Linter.LintMessage
}
declare type OnLintMessage = (msg: OutputMessage) => Promise<void>
declare type EslintOptions = string | CLIEngine.Options["baseConfig"]
interface PluginOptions {
  /** Override the base extensions from the Eslint Config */
  extensions?: string[]
  /**
   * If you want to choose which messages to output and which to suppress
   * (depending on Pull Request Labels for example), you can hook in to this function
   */
  onLintMessage?: OnLintMessage
}
/**
 * Eslint your code with Danger
 */
export default function eslint(
  config: EslintOptions,
  extensionsOrOptions: string[] | PluginOptions,
  localFiles: string[]
): Promise<void[]>
export {}
