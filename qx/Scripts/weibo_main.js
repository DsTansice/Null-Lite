const mainConfig={isDebug:!1,removeHomeVip:!0,removeHomeCreatorTask:!0,removeRelate:!0,removeGood:!0,removeFollow:!0,modifyMenus:!0,removeRelateItem:!1,removeRecommendItem:!0,removeRewardItem:!0,removeLiveMedia:!0,removeNextVideo:!1,removePinedTrending:!0,removeInterestFriendInTopic:!1,removeInterestTopic:!1,removeInterestUser:!1,removeLvZhou:!0,removeSearchWindow:!0,profileSkin1:null,profileSkin2:null,tabIconVersion:0,tabIconPath:""},itemMenusConfig={creator_task:!1,mblog_menus_custom:!1,mblog_menus_video_later:!0,mblog_menus_comment_manager:!0,mblog_menus_avatar_widget:!1,mblog_menus_card_bg:!1,mblog_menus_long_picture:!0,mblog_menus_delete:!0,mblog_menus_edit:!0,mblog_menus_edit_history:!0,mblog_menus_edit_video:!0,mblog_menus_sticking:!0,mblog_menus_open_reward:!0,mblog_menus_novelty:!1,mblog_menus_favorite:!0,mblog_menus_promote:!0,mblog_menus_modify_visible:!0,mblog_menus_copy_url:!0,mblog_menus_follow:!0,mblog_menus_video_feedback:!0,mblog_menus_shield:!0,mblog_menus_report:!0,mblog_menus_apeal:!0,mblog_menus_home:!0},modifyCardsUrls=["/cardlist","video/community_tab","/searchall"],modifyStatusesUrls=["statuses/friends/timeline","statuses/unread_friends_timeline","statuses/unread_hot_timeline","groups/timeline"],otherUrls={"/profile/me":"removeHome","/statuses/extend":"itemExtendHandler","/video/remind_info":"removeVideoRemind","/checkin/show":"removeCheckin","/live/media_homelist":"removeMediaHomelist","/comments/build_comments":"removeComments","/container/get_item":"containerHandler","/profile/container_timeline":"userHandler","/video/tiny_stream_video_list":"nextVideoHandler","/2/statuses/video_mixtimeline":"nextVideoHandler","/!/client/light_skin":"tabSkinHandler","/littleskin/preview":"skinPreviewHandler","/search/finder":"removeSearchMain","/search/container_timeline":"removeSearch","/search/container_discover":"removeSearch","/2/messageflow":"removeMsgAd","/2/page?":"removePage","/statuses/unread_topic_timeline":"topicHandler","/statuses/container_timeline":"removeMain","wbapplua/wbpullad.lua":"removeLuaScreenAds","interface/sdk/sdkad.php":"removePhpScreenAds"};function getModifyMethod(e){for(const n of modifyCardsUrls)if(-1<e.indexOf(n))return"removeCards";for(const r of modifyStatusesUrls)if(-1<e.indexOf(r))return"removeTimeLine";for(var[o,i]of Object.entries(otherUrls))if(-1<e.indexOf(o))return i;return null}function isAd(e){return!(!e||"广告"!=e.mblogtypename&&"热推"!=e.mblogtypename&&"廣告"!=e.mblogtypename&&"熱推"!=e.mblogtypename&&(!e.promotion||"ad"!=e.promotion.type))}function removeMain(e){if(e.items){var o,i=[];for(o of e.items)isAd(o.data)||i.push(o);e.items=i,log("removeMain success")}return e}function topicHandler(e){var o=e.cards;if(o&&(mainConfig.removeUnfollowTopic||mainConfig.removeUnusedPart)){var i,n=[];for(i of o){let e=!0;if(i.mblog){var r=i.mblog.buttons;mainConfig.removeUnfollowTopic&&r&&"follow"==r[0].type&&(e=!1)}else{if(!mainConfig.removeUnusedPart)continue;if("bottom_mix_activity"==i.itemid)e=!1;else if("正在活跃"==i?.top?.title)e=!1;else if(200==i.card_type&&i.group)e=!1;else{r=i.card_group;if(!r)continue;var t=r[0];if(-1<["guess_like_title","cats_top_title","chaohua_home_readpost_samecity_title"].indexOf(t.itemid))e=!1;else if(1<r.length){var a,m=[];for(a of r)-1==["chaohua_discovery_banner_1","bottom_mix_activity"].indexOf(a.itemid)&&m.push(a);i.card_group=m}}}e&&n.push(i)}e.cards=n,log("topicHandler success")}return e}function removeSearchMain(e){var o=e.channelInfo.channels;if(o){for(var i of o){i=i.payload;i&&removeSearch(i)}log("remove_search main success")}return e}function checkSearchWindow(e){return!!mainConfig.removeSearchWindow&&"card"==e.category&&("finder_window"==e.data?.itemid||"more_frame"==e.data?.itemid)}function removeSearch(e){if(e.items){var o,i=[];for(o of e.items)"feed"==o.category?isAd(o.data)||i.push(o):checkSearchWindow(o)||i.push(o);e.items=i,log("remove_search success")}return e}function removeMsgAd(e){if(e.messages){var o,i=[];for(o of e.messages)o.msg_card?.ad_tag||i.push(o);return e.messages=i,e}}function removePage(e){return removeCards(e),mainConfig.removePinedTrending&&e.cards&&0<e.cards.length&&e.cards[0].card_group&&(e.cards[0].card_group=e.cards[0].card_group.filter(e=>!e.itemid.includes("t:51"))),e}function removeCards(e){if(e.cards){var o=[];for(const r of e.cards){var i=r.card_group;if(i&&0<i.length){var n=[];for(const t of i)118!=t.card_type&&n.push(t);r.card_group=n,o.push(r)}else{i=r.card_type;-1<[9,165].indexOf(i)&&isAd(r.mblog)||o.push(r)}}e.cards=o}}function lvZhouHandler(e){if(mainConfig.removeLvZhou&&e){var o=e.common_struct;if(o){var i=[];for(const n of o)"绿洲"!=n.name&&i.push(n);e.common_struct=i}}}function isBlock(e){var o=mainConfig.blockIds||[];if(0!==o.length){var i=e.user.id;for(const n of o)if(n==i)return!0}return!1}function removeTimeLine(e){for(const i of["ad","advertises","trends"])e[i]&&delete e[i];if(e.statuses){var o=[];for(const n of e.statuses)isAd(n)||(lvZhouHandler(n),isBlock(n))||o.push(n);e.statuses=o}}function removeHomeVip(e){return e.header&&e.header.vipView&&(e.header.vipView=null),e}function removeVideoRemind(e){e.bubble_dismiss_time=0,e.exist_remind=!1,e.image_dismiss_time=0,e.image="",e.tag_image_english="",e.tag_image_english_dark="",e.tag_image_normal="",e.tag_image_normal_dark=""}function itemExtendHandler(e){var o;(mainConfig.removeRelate||mainConfig.removeGood)&&e.trend&&e.trend.titles&&(o=e.trend.titles.title,mainConfig.removeRelate&&"相关推荐"===o||mainConfig.removeGood&&"博主好物种草"===o)&&delete e.trend,mainConfig.removeFollow&&e.follow_data&&(e.follow_data=null),mainConfig.removeRewardItem&&e.reward_info&&(e.reward_info=null),e.page_alerts&&(e.page_alerts=null);try{-1<e.trend.extra_struct.extBtnInfo.btn_picurl.indexOf("timeline_icon_ad_delete")&&delete e.trend}catch(e){}if(mainConfig.modifyMenus&&e.custom_action_list){var i=[];for(const t of e.custom_action_list){var n=t.type,r=itemMenusConfig[n];void 0===r?i.push(t):"mblog_menus_copy_url"===n?i.unshift(t):r&&i.push(t)}e.custom_action_list=i}}function updateFollowOrder(e){try{for(var o of e.items){var i;if("mainnums_friends"===o.itemId)return i=o.click.modules[0].scheme,o.click.modules[0].scheme=i.replace("231093_-_selfrecomm","231093_-_selffollowed"),void log("updateFollowOrder success")}}catch(e){console.log("updateFollowOrder fail")}}function updateProfileSkin(o,e){try{var i=mainConfig[e];if(i){let e=0;for(var n of o.items)if(n.image)try{"alpha"!=(dm=n.image.style.darkMode)&&(n.image.style.darkMode="alpha"),n.image.iconUrl=i[e++],n.dot&&(n.dot=[])}catch(e){}log("updateProfileSkin success")}}catch(e){console.log("updateProfileSkin fail")}}function removeHome(e){if(e.items){var o,i=[];for(o of e.items){var n=o.itemId;"profileme_mine"==n?(updateFollowOrder(o=mainConfig.removeHomeVip?removeHomeVip(o):o),i.push(o)):"100505_-_top8"==n?(updateProfileSkin(o,"profileSkin1"),i.push(o)):"100505_-_newcreator"==n?"grid"==o.type?(updateProfileSkin(o,"profileSkin2"),i.push(o)):mainConfig.removeHomeCreatorTask||i.push(o):-1<["mine_attent_title","100505_-_meattent_pic","100505_-_newusertask","100505_-_vipkaitong","100505_-_hongbao2022","100505_-_adphoto"].indexOf(n)||n.match(/100505_-_meattent_-_\d+/)||i.push(o)}e.items=i}return e}function removeCheckin(e){log("remove tab1签到"),e.show=0}function removeMediaHomelist(e){mainConfig.removeLiveMedia&&(log("remove 首页直播"),e.data={})}function removeComments(e){var o=["广告"],i=(mainConfig.removeRelateItem&&o.push("相关内容"),mainConfig.removeRecommendItem&&o.push("推荐","热推"),e.datas||[]);if(0!==i.length){var n=[];for(const t of i){var r=t.adType||"";-1==o.indexOf(r)&&n.push(t)}log("remove 评论区相关和推荐内容"),e.datas=n}}function containerHandler(e){mainConfig.removeInterestFriendInTopic&&"超话里的好友"===e.card_type_name&&(log("remove 超话里的好友"),e.card_group=[]),mainConfig.removeInterestTopic&&e.itemid&&(-1<e.itemid.indexOf("infeed_may_interest_in")?(log("remove 感兴趣的超话"),e.card_group=[]):-1<e.itemid.indexOf("infeed_friends_recommend")&&(log("remove 超话好友关注"),e.card_group=[]))}function userHandler(e){if(e=removeMain(e),mainConfig.removeInterestUser&&e.items){var o,i=[];for(o of e.items){let e=!0;if("group"==o.category)try{"可能感兴趣的人"==o.items[0].data.desc&&(e=!1)}catch(e){}e&&i.push(o)}e.items=i,log("removeMain sub success")}return e}function nextVideoHandler(e){mainConfig.removeNextVideo&&(e.statuses=[],e.tab_list=[],console.log("nextVideoHandler"))}function tabSkinHandler(e){try{var o,i=mainConfig.tabIconVersion;if(e.data.canUse=1,i&&mainConfig.tabIconPath&&!(i<100)){for(o of e.data.list)o.version=i,o.downloadlink=mainConfig.tabIconPath;log("tabSkinHandler success")}}catch(e){log("tabSkinHandler fail")}}function skinPreviewHandler(e){e.data.skin_info.status=1}function removeLuaScreenAds(e){if(e.cached_ad)for(var o of e.cached_ad.ads)o.start_date=1893254400,o.show_count=0,o.duration=0,o.end_date=1893340799;return e}function removePhpScreenAds(e){if(e.ads){e.show_push_splash_ad=!1,e.background_delay_display_time=86400,e.lastAdShow_delay_display_time=604800,e.realtime_ad_video_stall_time=86400,e.realtime_ad_timeout_duration=604800;for(var o of e.ads)o.displaytime=0,o.displayintervel=86400,o.allowdaydisplaynum=0,o.displaynum=0,o.begintime="2029-12-30 00:00:00",o.endtime="2029-12-30 23:59:59"}return e}function log(e){mainConfig.isDebug&&console.log(e)}var body=$response.body,url=$request.url;let method=getModifyMethod(url);if(method){log(method);var func=eval(method);let data=JSON.parse(body.match(/\{.*\}/)[0]);new func(data),body=JSON.stringify(data),"removePhpScreenAds"==method&&(body=JSON.stringify(data)+"OK")}$done({body:body});