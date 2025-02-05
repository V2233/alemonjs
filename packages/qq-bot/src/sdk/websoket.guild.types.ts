import { IntentsGuildEnum } from './intents.guild'

/**
 * ******
 * guild
 * *****
 */
export interface GuildOptions {
  /**
   * 应用编号
   */
  app_id: string
  /**
   * 钥匙
   */
  token: string
  /**
   * 密钥
   */
  secret?: string
  /**
   * 分片
   * [0, 1]
   */
  shard?: number[]
  /**
   * 事件订阅
   */
  intents?: IntentsGuildEnum[]
  /**
   * 是否是私域
   * false
   */
  is_private?: boolean
  /**
   * 是否是沙盒环境
   * false
   */
  sandbox?: boolean
}
