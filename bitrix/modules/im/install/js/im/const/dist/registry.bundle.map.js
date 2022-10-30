{"version":3,"sources":["registry.bundle.js"],"names":["this","BX","Messenger","exports","DateFormat","Object","freeze","groupTitle","message","recentTitle","recentLinesTitle","readedTitle","default","vacationTitle","DeviceType","mobile","desktop","DeviceOrientation","horizontal","portrait","MutationType","none","add","update","delete","set","setAfter","setBefore","StorageLimit","dialogues","messages","RestMethod","imMessageAdd","imMessageUpdate","imMessageDelete","imMessageLike","imMessageCommand","imMessageShare","imChatGet","imChatLeave","imChatMute","imChatParentJoin","imDialogGet","imDialogMessagesGet","imDialogRead","imDialogUnread","imDialogWriting","imUserGet","imUserListGet","imDiskFolderGet","imDiskFileUpload","imDiskFileCommit","mobileBrowserConstGet","imRecentGet","imRecentList","imCallGetCallLimits","imNotifyGet","imNotifySchemaGet","RestMethodHandler","imDialogMessagesGetInit","imDialogMessagesGetUnread","EventType","dialog","newMessage","scrollOnStart","scrollToBottom","readVisibleMessages","requestUnread","readMessage","quoteMessage","clickOnCommand","clickOnMention","clickOnUserName","clickOnMessageMenu","clickOnMessageRetry","clickOnUploadCancel","clickOnReadList","setMessageReaction","openMessageReactionList","clickOnKeyboardButton","clickOnChatTeaser","clickOnDialog","quotePanelClose","beforeMobileKeyboard","messagesSet","textarea","focus","setFocus","blur","setBlur","keyUp","edit","insertText","sendMessage","fileSelected","startWriting","appButtonClick","conference","setPasswordFocus","hideSmiles","requestPermissions","waitForStart","userRenameFocus","userRenameBlur","notification","updateState","DialogType","private","chat","open","call","crm","DialogCrmType","lead","company","contact","deal","DialogReferenceClassName","listBody","listItem","listItemName","listItemBody","listUnreadLoader","DialogTemplateType","delimiter","group","historyLoader","unreadLoader","button","placeholder","DialogState","loading","empty","show","FileStatus","upload","wait","done","error","FileType","image","video","audio","file","MessageType","self","opponent","system","ConferenceFieldState","view","create","ConferenceStateType","preparation","ConferenceErrorCode","userLimitReached","detectIntranetUser","bitrix24only","kickedFromCall","unsupportedBrowser","missingMicrophone","unsafeConnection","wrongAlias","notStarted","finished","userLeftCall","noSignalFromCamera","ConferenceRightPanelMode","hidden","users","split","ConferenceUserState","Idle","Busy","Calling","Unavailable","Declined","Ready","Connecting","Connected","Failed","ChatTypes","user","TemplateTypes","item","RecentSection","general","pinned","MessageStatus","received","delivered","NotificationTypesCodes","confirm","simple","Const"],"mappings":"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","file":"registry.bundle.map.js"}