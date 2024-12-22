import { PublicEventChannalCreate, PublicEventChannalDelete } from './channal'
import { PublicEventGuildExit, PublicEventGuildJoin } from './guild'
import { PublicEventMemberAdd, PublicEventMemberRemove } from './member'
import {
  PublicEventMessageCreate,
  PublicEventMessageDelete,
  PublicEventMessageReactionAdd,
  PublicEventMessageReactionRemove,
  PublicEventMessageUpdate
} from './message/message'

import {
  PrivateEventMessageCreate,
  PrivateEventMessageDelete,
  PrivateEventMessageUpdate
} from './message/private.message'

import { PrivateEventRequestFriendAdd, PrivateEventRequestGuildAdd } from './request'

// 携带有消息体的
export type AEventsMessage = {
  'message.create': PublicEventMessageCreate
  'private.message.create': PrivateEventMessageCreate
}

export type AEventsMessageEnum = PublicEventMessageCreate | PrivateEventMessageCreate

export type AEvents = {
  'message.update': PublicEventMessageUpdate
  'message.delete': PublicEventMessageDelete
  'message.reaction.add': PublicEventMessageReactionAdd
  'message.reaction.remove': PublicEventMessageReactionRemove
  'channal.create': PublicEventChannalCreate
  'channal.delete': PublicEventChannalDelete
  'guild.join': PublicEventGuildJoin
  'guild.exit': PublicEventGuildExit
  'member.add': PublicEventMemberAdd
  'member.remove': PublicEventMemberRemove
  'private.message.update': PrivateEventMessageUpdate
  'private.message.delete': PrivateEventMessageDelete
  'private.friend.add': PrivateEventRequestFriendAdd
  'private.guild.add': PrivateEventRequestGuildAdd
} & AEventsMessage

export type AEventsEnum =
  | AEventsMessageEnum
  | PublicEventMessageUpdate
  | PublicEventMessageDelete
  | PublicEventMessageReactionAdd
  | PublicEventMessageReactionRemove
  | PublicEventChannalCreate
  | PublicEventChannalDelete
  | PublicEventGuildJoin
  | PublicEventGuildExit
  | PublicEventMemberAdd
  | PublicEventMemberRemove
  | PrivateEventMessageUpdate
  | PrivateEventMessageDelete
  | PrivateEventRequestFriendAdd
  | PrivateEventRequestGuildAdd