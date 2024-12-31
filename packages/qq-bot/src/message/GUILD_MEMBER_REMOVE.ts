/**
 * 当成员被移除时
 * @param event
 * @returns
 */
export type GUILD_MEMBER_REMOVE_TYPE = {
  guild_id: string
  joined_at: string
  nick: string
  op_user_id: string
  roles: string[]
  source_type?: string // 加入时就会有
  user: {
    avatar: string
    bot: number
    id: string
    username: string
  }
}
