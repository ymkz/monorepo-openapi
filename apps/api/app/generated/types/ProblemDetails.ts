/**
 * @description Problem Details (RFC9457)
 */
export type ProblemDetails = {
	/**
	 * @description 主要なエラーの要因
	 * @type string
	 */
	title: string
	/**
	 * @description エラーコード
	 * @type string
	 */
	type: string
	/**
	 * @description エラーの詳細に関するメッセージ
	 * @type string
	 */
	detail: string
	/**
	 * @description HTTPステータスコード
	 * @type integer, int32
	 */
	status: number
}
