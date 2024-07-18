export type Todo = {
	/**
	 * @description 連番で発番されるid
	 * @type string
	 */
	id: string
	/**
	 * @description タイトル
	 * @type string
	 */
	title: string
	/**
	 * @description 完了時刻（ISO8601）（最後に完了にした時刻が入る）
	 * @type string | undefined, date-time
	 */
	completedAt?: string
	/**
	 * @description 作成時刻（ISO8601）
	 * @type string, date-time
	 */
	createdAt: string
	/**
	 * @description 更新時刻（ISO8601）（更新されるたびに更新時刻が入る）
	 * @type string | undefined, date-time
	 */
	updatedAt?: string
	/**
	 * @description 削除時刻（ISO8601）（論理削除されたら削除時刻が入る）
	 * @type string | undefined, date-time
	 */
	deletedAt?: string
}
