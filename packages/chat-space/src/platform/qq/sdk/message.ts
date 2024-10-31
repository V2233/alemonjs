import { AT_MESSAGE_CREATE_TYPE } from './message/AT_MESSAGE_CREATE'
import { CHANNEL_CREATE_TYPE } from './message/CHANNEL_CREATE'
import { CHANNEL_DELETE_TYPE } from './message/CHANNEL_DELETE'
import { CHANNEL_UPDATE_TYPE } from './message/CHANNEL_UPDATE'
import { DIRECT_MESSAGE_CREATE_TYPE } from './message/DIRECT_MESSAGE_CREATE'
import { DIRECT_MESSAGE_DELETE_TYPE } from './message/DIRECT_MESSAGE_DELETE'
import { GUILD_CREATE_TYPE } from './message/GUILD_CREATE'
import { GUILD_DELETE_TYPE } from './message/GUILD_DELETE'
import { GUILD_MEMBER_ADD_TYPE } from './message/GUILD_MEMBER_ADD'
import { GUILD_MEMBER_REMOVE_TYPE } from './message/GUILD_MEMBER_REMOVE'
import { GUILD_MEMBER_UPDATE_TYPE } from './message/GUILD_MEMBER_UPDATE'
import { GUILD_UPDATE_TYPE } from './message/GUILD_UPDATE'
import { INTERACTION_CREATE_TYPE } from './message/INTERACTION_CREATE'
import { MESSAGE_CREATE_TYPE } from './message/MESSAGE_CREATE'
import { MESSAGE_DELETE_TYPE } from './message/MESSAGE_DELETE'
import { MESSAGE_REACTION_ADD_TYPE } from './message/MESSAGE_REACTION_ADD'
import { MESSAGE_REACTION_REMOVE_TYPE } from './message/MESSAGE_REACTION_REMOVE'
import { PUBLIC_MESSAGE_DELETE_TYPE } from './message/PUBLIC_MESSAGE_DELETE'
import { READY_TYPE } from './message/READY'

export type QQBotGuildEventMap = {
  AT_MESSAGE_CREATE: AT_MESSAGE_CREATE_TYPE
  CHANNEL_CREATE: CHANNEL_CREATE_TYPE
  CHANNEL_DELETE: CHANNEL_DELETE_TYPE
  CHANNEL_UPDATE: CHANNEL_UPDATE_TYPE
  DIRECT_MESSAGE_CREATE: DIRECT_MESSAGE_CREATE_TYPE
  DIRECT_MESSAGE_DELETE: DIRECT_MESSAGE_DELETE_TYPE
  GUILD_CREATE: GUILD_CREATE_TYPE
  GUILD_DELETE: GUILD_DELETE_TYPE
  GUILD_MEMBER_ADD: GUILD_MEMBER_ADD_TYPE
  GUILD_MEMBER_REMOVE: GUILD_MEMBER_REMOVE_TYPE
  GUILD_MEMBER_UPDATE: GUILD_MEMBER_UPDATE_TYPE
  GUILD_UPDATE: GUILD_UPDATE_TYPE
  INTERACTION_CREATE: INTERACTION_CREATE_TYPE
  MESSAGE_CREATE: MESSAGE_CREATE_TYPE
  MESSAGE_DELETE: MESSAGE_DELETE_TYPE
  MESSAGE_REACTION_ADD: MESSAGE_REACTION_ADD_TYPE
  MESSAGE_REACTION_REMOVE: MESSAGE_REACTION_REMOVE_TYPE
  PUBLIC_MESSAGE_DELETE: PUBLIC_MESSAGE_DELETE_TYPE
  READY: READY_TYPE
  ERROR: any
}
