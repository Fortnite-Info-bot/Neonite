
module.exports = {
    userSetting: function(req, res){
        res.json([
			{
				"accountId": req.body.accountId,
				"key": "avatar",
				"value": "cid_003_athena_commando_f_default"
			},
			{
				"accountId": req.body.accountId,
				"key": "avatarBackground",
				"value": "[\"#B4F2FE\",\"#00ACF2\",\"#005679\"]"
			},
			{
				"accountId": req.body.accountId,
				"key": "appInstalled",
				"value": "init"
            }
        ])
    },

    epicSettings: function(req, res){
        res.json({
			"response": {
			  "settings": [
				{
				  "namespace": "discovery-browser",
				  "settingName": "experience-browser",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "discovery-browser",
					"settingName": "experience-browser",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Content can be targeted for experience purposes",
						"userNotice": "Determines if you can be targeted content, based on personal data, for experience purposes",
						"parentNotice": "Determines if your child can be targeted content, based on personal data, for experience purposes"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "party",
				  "settingName": "party-joinability",
				  "preferredValue": "Private",
				  "preferredValueUpdatedAt": 1692801510749,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": "Private",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "party",
					"settingName": "party-joinability",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Party Privacy",
						"userNotice": "Party Privacy",
						"parentNotice": "Party Privacy"
					  }
					},
					"options": [
					  {
						"value": "Private",
						"translations": {
						  "en": {
							"label": "Private",
							"userNotice": "Private",
							"parentNotice": "Private"
						  }
						}
					  },
					  {
						"value": "Public",
						"translations": {
						  "en": {
							"label": "Public",
							"userNotice": "Public",
							"parentNotice": "Public"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "Public",
					  "enforcedLimit": "Public"
					}
				  }
				},
				{
				  "namespace": "prm",
				  "settingName": "functional",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "prm",
					"settingName": "functional",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Content can be targeted for functional purposes",
						"userNotice": "Determines if you can be targeted content, based on personal data, for functional purposes",
						"parentNotice": "Determines if your child can be targeted content, based on personal data, for functional purposes"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "prm",
				  "settingName": "experience",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "prm",
					"settingName": "experience",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Content can be targeted for experience purposes",
						"userNotice": "Determines if you can be targeted content, based on personal data, for experience purposes",
						"parentNotice": "Determines if your child can be targeted content, based on personal data, for experience purposes"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "prm",
				  "settingName": "marketing",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "prm",
					"settingName": "marketing",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Content can be targeted for marketing purposes",
						"userNotice": "Determines if you can be targeted content, based on personal data, for marketing purposes",
						"parentNotice": "Determines if your child can be targeted content, based on personal data, for marketing purposes"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "stats",
				  "settingName": "show-in-leaderboard",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1704927492931,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "stats",
					"settingName": "show-in-leaderboard",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Show on career leaderboard",
						"userNotice": "Show on career leaderboard",
						"parentNotice": "Show on career leaderboard"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "chat",
				  "settingName": "filter-out-mature-language",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1706138900420,
				  "preferredValueFromOrgLevel": false,
				  "parentLimit": false,
				  "parentLimitFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "chat",
					"settingName": "filter-out-mature-language",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Filter out mature language in Epic text chat",
						"userNotice": "Mature language in text chat will be filtered and replaced with heart symbols",
						"parentNotice": "<b>On:</b> Mature language in text chat will be filtered and replaced with heart symbols."
					  }
					},
					"options": [],
					"restrictiveOrder": "falsePermissive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": false,
					  "defaultParentLimit": false
					}
				  }
				},
				{
				  "namespace": "chat",
				  "settingName": "voice",
				  "preferredValue": "everybody",
				  "preferredValueUpdatedAt": 1706138900423,
				  "preferredValueFromOrgLevel": false,
				  "parentLimit": "everybody",
				  "parentLimitFromOrgLevel": true,
				  "effectiveValue": "everybody",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "chat",
					"settingName": "voice",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Voice chat",
						"userNotice": "Determines with whom you can use the voice chat feature",
						"parentNotice": "Who can your child speak with using Epic voice chat?"
					  }
					},
					"options": [
					  {
						"value": "nobody",
						"translations": {
						  "en": {
							"label": "Nobody",
							"userNotice": "Epic voice chat is disabled.",
							"parentNotice": "Epic voice chat is disabled for your child."
						  }
						}
					  },
					  {
						"value": "friends",
						"translations": {
						  "en": {
							"label": "Friends Only",
							"userNotice": "You can voice chat only with players in their Epic friends list and platform friends list.",
							"parentNotice": "Your child can voice chat only with players in their Epic friends list and platform friends list."
						  }
						}
					  },
					  {
						"value": "friends-and-teammates",
						"translations": {
						  "en": {
							"label": "Friends & Teammates",
							"userNotice": "You can voice chat with players in their Epic friends list and platform friends list, and those on their team.",
							"parentNotice": "Your child can voice chat with players in their Epic friends list and platform friends list, and those on their team."
						  }
						}
					  },
					  {
						"value": "everybody",
						"translations": {
						  "en": {
							"label": "Everybody",
							"userNotice": "You can voice chat with any player.",
							"parentNotice": "Your child can voice chat with any player."
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "everybody",
					  "defaultParentLimit": "everybody"
					}
				  }
				},
				{
				  "namespace": "chat",
				  "settingName": "text",
				  "preferredValue": "everybody",
				  "preferredValueUpdatedAt": 1706138900421,
				  "preferredValueFromOrgLevel": false,
				  "parentLimit": "everybody",
				  "parentLimitFromOrgLevel": true,
				  "effectiveValue": "everybody",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "chat",
					"settingName": "text",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Voice chat",
						"userNotice": "Determines with whom you can use the text chat feature",
						"parentNotice": "Who can your child message with using Epic text chat?"
					  }
					},
					"options": [
					  {
						"value": "nobody",
						"translations": {
						  "en": {
							"label": "Nobody",
							"userNotice": "You cannot use text chat with anybody",
							"parentNotice": "Epic text chat is disabled for your child."
						  }
						}
					  },
					  {
						"value": "friends",
						"translations": {
						  "en": {
							"label": "Friends Only",
							"userNotice": "You can use text chat with friends only",
							"parentNotice": "Your child can text chat only with players in their Epic friends list and platform friends list."
						  }
						}
					  },
					  {
						"value": "friends-and-teammates",
						"translations": {
						  "en": {
							"label": "Friends & Teammates",
							"userNotice": "You can use text chat with friends and teammates",
							"parentNotice": "Your child can text chat with players in their Epic friends list and platform friends list, and those on their team."
						  }
						}
					  },
					  {
						"value": "everybody",
						"translations": {
						  "en": {
							"label": "Everybody",
							"userNotice": "You can use text chat with everybody",
							"parentNotice": "Your child can text chat with any player."
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "everybody",
					  "defaultParentLimit": "everybody"
					}
				  }
				},
				{
				  "namespace": "chat",
				  "settingName": "enhanced-voice-reporting",
				  "preferredValue": "prefer-not-recording",
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": "prefer-not-recording",
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "chat",
					"settingName": "enhanced-voice-reporting",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Enhanced voice chat recording",
						"userNotice": "Determines enhanced voice chat recording setting",
						"parentNotice": "Determines enhanced voice chat recording setting"
					  }
					},
					"options": [
					  {
						"value": "recording",
						"translations": {
						  "en": {
							"label": "Always On"
						  }
						}
					  },
					  {
						"value": "prefer-not-recording",
						"translations": {
						  "en": {
							"label": "Off When Possible"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "prefer-not-recording"
					}
				  }
				},
				{
				  "namespace": "chat",
				  "settingName": "voice-chat-recording",
				  "preferredValue": "prefer-not-recording-and-auto-mute",
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": "prefer-not-recording-and-auto-mute",
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "chat",
					"settingName": "voice-chat-recording",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Enhanced voice chat recording",
						"userNotice": "Determines enhanced voice chat recording setting",
						"parentNotice": "Determines enhanced voice chat recording setting"
					  }
					},
					"options": [
					  {
						"value": "recording",
						"translations": {
						  "en": {
							"label": "ON",
							"userNotice": "When Enhanced Voice Chat Reporting is turned ON, it is available in all voice chats.",
							"parentNotice": "When Enhanced Voice Chat Reporting is turned ON, it is available in all voice chats."
						  }
						}
					  },
					  {
						"value": "prefer-not-recording",
						"translations": {
						  "en": {
							"label": "PREFER OFF",
							"userNotice": "When Enhanced Voice Chat Reporting is turned to PREFER OFF, it is disabled when all players in the party channel have set enhanced voice reporting to PREFER OFF.",
							"parentNotice": "When Enhanced Voice Chat Reporting is turned to PREFER OFF, it is disabled when all players in the party channel have set enhanced voice reporting to PREFER OFF."
						  }
						}
					  },
					  {
						"value": "prefer-not-recording-and-auto-mute",
						"translations": {
						  "en": {
							"label": "PREFER OFF & AUTOMUTE",
							"userNotice": "Same behaviour as PREFER OFF. Additionally, you will be auto-muted if reporting is available in your voice chat due to the preferences of other players. Note that enhanced voice chat reporting is always enabled, regardless of your settings, in game chat, proximity chat, looking for party chat, or when a party includes at least one player who has Enhanced Voice Chat Reporting turned ON. You will be notified in-game if the status of reporting changes. Only players aged 18 and older can change this setting to PREFER OFF or PREFER OFF & AUTO MUTE.",
							"parentNotice": "Same behaviour as PREFER OFF. Additionally, you will be auto-muted if reporting is available in your voice chat due to the preferences of other players. Note that enhanced voice chat reporting is always enabled, regardless of your settings, in game chat, proximity chat, looking for party chat, or when a party includes at least one player who has Enhanced Voice Chat Reporting turned ON. You will be notified in-game if the status of reporting changes. Only players aged 18 and older can change this setting to PREFER OFF or PREFER OFF & AUTO MUTE."
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "prefer-not-recording-and-auto-mute"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "ratings-body",
				  "preferredValue": "PEGI",
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": "PEGI",
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "ratings-body",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Rating Body",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "ACB",
						"translations": {
						  "en": {
							"label": "ACB",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CERO",
						"translations": {
						  "en": {
							"label": "CERO",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CSRR",
						"translations": {
						  "en": {
							"label": "CSRR",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ClassInd",
						"translations": {
						  "en": {
							"label": "ClassInd",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ESRB",
						"translations": {
						  "en": {
							"label": "ESRB",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "FPB",
						"translations": {
						  "en": {
							"label": "FPB",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GCAM",
						"translations": {
						  "en": {
							"label": "GCAM",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GRAC",
						"translations": {
						  "en": {
							"label": "GRAC",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "Generic",
						"translations": {
						  "en": {
							"label": "IARC Generic",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "MRO",
						"translations": {
						  "en": {
							"label": "MRO",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "OFLC",
						"translations": {
						  "en": {
							"label": "OFLC",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "PEGI",
						"translations": {
						  "en": {
							"label": "PEGI",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "Russia",
						"translations": {
						  "en": {
							"label": "Russia",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "USK",
						"translations": {
						  "en": {
							"label": "USK",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": true,
					"required": false,
					"dataStorage": "readOnly",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "PEGI"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-esrb",
				  "preferredValue": "ESRB_AGE_T",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "ESRB_AGE_T",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862935,
				  "effectiveValue": "ESRB_AGE_T",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-esrb",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "ESRB limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "ESRB_AGE_E",
						"translations": {
						  "en": {
							"label": "Everyone",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ESRB_AGE_E10",
						"translations": {
						  "en": {
							"label": "Everyone 10+",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ESRB_AGE_T",
						"translations": {
						  "en": {
							"label": "Teen",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-pegi",
				  "preferredValue": "PEGI_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "PEGI_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862936,
				  "effectiveValue": "PEGI_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-pegi",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "PEGI limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "PEGI_AGE_3",
						"translations": {
						  "en": {
							"label": "PEGI 3",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "PEGI_AGE_7",
						"translations": {
						  "en": {
							"label": "PEGI 7",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "PEGI_AGE_12",
						"translations": {
						  "en": {
							"label": "PEGI 12",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-usk",
				  "preferredValue": "USK_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "USK_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862938,
				  "effectiveValue": "USK_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-usk",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "USK limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "USK_AGE_0",
						"translations": {
						  "en": {
							"label": "Everyone",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "USK_AGE_6",
						"translations": {
						  "en": {
							"label": "6+",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "USK_AGE_12",
						"translations": {
						  "en": {
							"label": "12+",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-grac",
				  "preferredValue": "GRAC_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "GRAC_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862939,
				  "effectiveValue": "GRAC_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-grac",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "GRAC limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "GRAC_AGE_ALL",
						"translations": {
						  "en": {
							"label": "All ages",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GRAC_AGE_12",
						"translations": {
						  "en": {
							"label": "12+",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "GRAC_AGE_18",
					  "defaultParentLimit": "GRAC_AGE_18"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-generic",
				  "preferredValue": "GEN_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "GEN_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862940,
				  "effectiveValue": "GEN_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-generic",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Generic limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "GEN_AGE_3",
						"translations": {
						  "en": {
							"label": "3+",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GEN_AGE_7",
						"translations": {
						  "en": {
							"label": "7+",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GEN_AGE_12",
						"translations": {
						  "en": {
							"label": "12+",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-acb",
				  "preferredValue": "ACB_AGE_M",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "ACB_AGE_M",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862937,
				  "effectiveValue": "ACB_AGE_M",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-acb",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "ACB limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "ACB_AGE_G",
						"translations": {
						  "en": {
							"label": "General",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ACB_AGE_PG",
						"translations": {
						  "en": {
							"label": "Parental guidance",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "ACB_AGE_M",
						"translations": {
						  "en": {
							"label": "Mature",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "ACB_AGE_R18",
					  "defaultParentLimit": "ACB_AGE_R18"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-classind",
				  "preferredValue": "CLASSIND_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "CLASSIND_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862937,
				  "effectiveValue": "CLASSIND_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-classind",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "ClassInd limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "CLASSIND_AGE_LIVRE",
						"translations": {
						  "en": {
							"label": "All ages",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CLASSIND_AGE_10",
						"translations": {
						  "en": {
							"label": "10 years",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CLASSIND_AGE_12",
						"translations": {
						  "en": {
							"label": "12 years",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "CLASSIND_AGE_18",
					  "defaultParentLimit": "CLASSIND_AGE_18"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-russia",
				  "preferredValue": "RUSSIA_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "RUSSIA_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862939,
				  "effectiveValue": "RUSSIA_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-russia",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Russia limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "RUSSIA_AGE_0",
						"translations": {
						  "en": {
							"label": "All ages",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "RUSSIA_AGE_6",
						"translations": {
						  "en": {
							"label": "6+",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "RUSSIA_AGE_12",
						"translations": {
						  "en": {
							"label": "12+",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "RUSSIA_AGE_18",
					  "defaultParentLimit": "RUSSIA_AGE_18"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-oflc",
				  "preferredValue": "OFLC_AGE_13",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "OFLC_AGE_13",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862940,
				  "effectiveValue": "OFLC_AGE_13",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-oflc",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "OFLC limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "OFLC_AGE_0",
						"translations": {
						  "en": {
							"label": "G",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "OFLC_AGE_8",
						"translations": {
						  "en": {
							"label": "PG",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "OFLC_AGE_13",
						"translations": {
						  "en": {
							"label": "R13",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-fpb",
				  "preferredValue": "FPB_AGE_13",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "FPB_AGE_13",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862941,
				  "effectiveValue": "FPB_AGE_13",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-fpb",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "FPB limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "FPB_AGE_0",
						"translations": {
						  "en": {
							"label": "PG",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "FPB_AGE_7",
						"translations": {
						  "en": {
							"label": "7-9 PG",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "FPB_AGE_10",
						"translations": {
						  "en": {
							"label": "10-12 PG",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "FPB_AGE_13",
						"translations": {
						  "en": {
							"label": "13",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-cero",
				  "preferredValue": "CERO_AGE_15",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "CERO_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862942,
				  "effectiveValue": "CERO_AGE_12",
				  "effectiveSource": "parentLimit",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-cero",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "CERO limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "CERO_AGE_0",
						"translations": {
						  "en": {
							"label": "CERO A",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CERO_AGE_12",
						"translations": {
						  "en": {
							"label": "CERO B",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CERO_AGE_15",
						"translations": {
						  "en": {
							"label": "CERO C",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-csrr",
				  "preferredValue": "CSRR_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "CSRR_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862942,
				  "effectiveValue": "CSRR_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-csrr",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "CSRR limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "CSRR_AGE_0",
						"translations": {
						  "en": {
							"label": "G",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CSRR_AGE_6",
						"translations": {
						  "en": {
							"label": "P",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "CSRR_AGE_12",
						"translations": {
						  "en": {
							"label": "PG12",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-gcam",
				  "preferredValue": "GCAM_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "GCAM_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862943,
				  "effectiveValue": "GCAM_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-gcam",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "GCAM limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "GCAM_AGE_3",
						"translations": {
						  "en": {
							"label": "3",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GCAM_AGE_7",
						"translations": {
						  "en": {
							"label": "7",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "GCAM_AGE_12",
						"translations": {
						  "en": {
							"label": "12",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "ratings",
				  "settingName": "limit-mro",
				  "preferredValue": "MRO_AGE_12",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "MRO_AGE_12",
				  "parentLimitFromOrgLevel": false,
				  "parentLimitUpdatedAt": 1700171862944,
				  "effectiveValue": "MRO_AGE_12",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "ratings",
					"settingName": "limit-mro",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "MRO limit",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "MRO_AGE_3",
						"translations": {
						  "en": {
							"label": "3",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "MRO_AGE_7",
						"translations": {
						  "en": {
							"label": "7",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "MRO_AGE_12",
						"translations": {
						  "en": {
							"label": "12",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "Unrated",
					  "defaultParentLimit": "Unrated"
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "require-pin-to-add-friend",
				  "preferredValue": false,
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": false,
				  "parentLimitFromOrgLevel": true,
				  "parentLimitUpdatedAt": 1663702993922,
				  "effectiveValue": false,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "require-pin-to-add-friend",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Require PIN to add Epic friends",
						"parentNotice": "<b>On:</b> Each time your child tries to send or accept an Epic Games friend request, you will need to enter your PIN. If a game or service doesn't yet support this setting, friend requests won't be permitted. This setting doesn’t affect friends systems on gaming platforms such as Playstation, Steam, XBox, and Switch."
					  }
					},
					"options": [],
					"restrictiveOrder": "falsePermissive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": false,
					  "defaultParentLimit": false
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "allow-non-squad-users-to-see-my-username",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1706138900418,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "allow-non-squad-users-to-see-my-username",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Display username to non-squad users",
						"userNotice": "Determines if your username can be shown to non-squad users",
						"parentNotice": "Determines if your child''s username can be shown to non-squad users"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "can-see-player-usernames-from-other-squads",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1706138900419,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "can-see-player-usernames-from-other-squads",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Can see usernames of players from other squads",
						"userNotice": "Determines if you can see usernames of players from other squads",
						"parentNotice": "Determines if your child can see usernames of players from other squads"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "playtime-reporting-frequency",
				  "preferredValue": "never",
				  "preferredValueFromOrgLevel": true,
				  "parentLimit": "never",
				  "parentLimitFromOrgLevel": true,
				  "effectiveValue": "never",
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "playtime-reporting-frequency",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Receive weekly playtime tracking reports",
						"parentNotice": "Receive weekly playtime tracking reports"
					  }
					},
					"options": [
					  {
						"value": "weekly",
						"translations": {
						  "en": {
							"label": "Weekly",
							"parentNotice": "<b>On:</b> We'll send a weekly playtime report to the parent or guardian associated with this account. If there isn't a parent or guardian email address, we'll send the playtime report to this account’s email address."
						  }
						}
					  },
					  {
						"value": "never",
						"translations": {
						  "en": {
							"label": "Never",
							"parentNotice": "<b>Off:</b> You won't receive weekly playtime tracking reports."
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": "never",
					  "defaultParentLimit": "never"
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "show-season-level",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1664305793410,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "show-season-level",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Show Season level in feed",
						"userNotice": "Show Season level in feed",
						"parentNotice": "Show Season level in feed"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "player-surveys",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1663966642975,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "player-surveys",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Player Surveys",
						"userNotice": "Player Surveys",
						"parentNotice": "Player Surveys"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "can-receive-gifts",
				  "preferredValue": true,
				  "preferredValueUpdatedAt": 1677621341867,
				  "preferredValueFromOrgLevel": false,
				  "parentLimit": true,
				  "parentLimitFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "can-receive-gifts",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "Can Receive Gifts",
						"userNotice": "Can Receive Gifts",
						"parentNotice": "Can Receive Gifts"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": true,
					  "defaultParentLimit": true,
					  "enforcedLimit": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "region-visibility",
				  "preferredValue": "private",
				  "preferredValueUpdatedAt": 1664369967640,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": "private",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "region-visibility",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "TBD",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "private",
						"translations": {
						  "en": {
							"label": "Private",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "friends-only",
						"translations": {
						  "en": {
							"label": "Friends Only",
							"parentNotice": "TODO"
						  }
						}
					  },
					  {
						"value": "public",
						"translations": {
						  "en": {
							"label": "Public",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "public",
					  "enforcedLimit": "public"
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "languages-visibility",
				  "preferredValue": "private",
				  "preferredValueUpdatedAt": 1664369967641,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": "private",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "languages-visibility",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "TBD",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "private",
						"translations": {
						  "en": {
							"label": "Private",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "friends-only",
						"translations": {
						  "en": {
							"label": "Friends Only",
							"parentNotice": "TODO"
						  }
						}
					  },
					  {
						"value": "public",
						"translations": {
						  "en": {
							"label": "Public",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "public",
					  "enforcedLimit": "public"
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "badges-visibility",
				  "preferredValue": "private",
				  "preferredValueUpdatedAt": 1664369967641,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": "private",
				  "effectiveSource": "preference",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "badges-visibility",
					"valueType": "option",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "TBD",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [
					  {
						"value": "private",
						"translations": {
						  "en": {
							"label": "Private",
							"userNotice": "TBD",
							"parentNotice": "TBD"
						  }
						}
					  },
					  {
						"value": "friends-only",
						"translations": {
						  "en": {
							"label": "Friends Only",
							"parentNotice": "TBD"
						  }
						}
					  }
					],
					"restrictiveOrder": "firstRestrictive",
					"userHidden": false,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": "friends-only",
					  "enforcedLimit": "friends-only"
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "allow-strikethrough-prices",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": true,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": true,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "allow-strikethrough-prices",
					"valueType": "boolean",
					"allowProductOverrides": "ageBrackets",
					"inheritFromOrg": true,
					"translations": {
					  "en": {
						"label": "TBD",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": true,
					"required": false,
					"dataStorage": "readOnly",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "allow-create-experiences",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": false,
				  "parentLimit": true,
				  "parentLimitFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "allow-create-experiences",
					"valueType": "boolean",
					"translations": {
					  "en": {
						"label": "Allow Create Experiences",
						"userNotice": "Determines whether the account can access general-purpose Create experiences in Fortnite (e.g. Creative Create)",
						"parentNotice": "TBD"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": true,
					"userReadOnly": false,
					"required": false,
					"dataStorage": "raw",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "consentTypeUnderParentalControl": "opt-in-unverified",
					  "defaultValue": true,
					  "defaultParentLimit": true
					}
				  }
				},
				{
				  "namespace": "profile",
				  "settingName": "can-monetize",
				  "preferredValue": true,
				  "preferredValueFromOrgLevel": false,
				  "effectiveValue": true,
				  "effectiveSource": "default",
				  "isOrgLevel": false,
				  "definition": {
					"orgId": "cc5b83aa-cb5c-4b4b-a800-a7dd64edacc0",
					"productId": "6fdb114c-3fbc-4ced-bc5b-55bcdba5c8f6",
					"namespace": "profile",
					"settingName": "can-monetize",
					"valueType": "boolean",
					"translations": {
					  "en": {
						"label": "TBD",
						"userNotice": "TBD",
						"parentNotice": "TBD"
					  }
					},
					"options": [],
					"restrictiveOrder": "falseRestrictive",
					"userHidden": false,
					"userReadOnly": true,
					"required": false,
					"dataStorage": "readOnly",
					"ageBracket": {
					  "consentTypeRequired": "none",
					  "defaultValue": true
					}
				  }
				}
			  ]
			},
			"meta": {
			  "requestId": "FN-6h-g6Udoqk_xfnXURWZSzQ",
			  "timestamp": "2024-02-07T12:15:08.154Z"
			}
		  })
    }
}