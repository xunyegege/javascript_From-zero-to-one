var searchResultNum=-1;var enterFlag='true';var serachTips=null;var settings;if(localStorage.getItem('settings')){settings=JSON.parse(localStorage.getItem('settings'))}else{settings={'searchSingle':'false','searchHistory':'false','searchTips':'close'}}var searchWebStatus=false;function getSearchData(data){var $inputText=$('#search-input');var $downList=$('.down-list');var tempHtml='';if(settings.searchTips=='baidu'){datas=data.s;if(datas.length>5){for(var i=0;i<5;i+=1){tempHtml+='<li>'+datas[i]+'</li>'}}else{for(var i=0;i<datas.length;i+=1){tempHtml+='<li>'+datas[i]+'</li>';}}}else if(settings.searchTips=='haosou'){datas=data.result;if(datas.length>5){for(var i=0;i<5;i+=1){tempHtml+='<li>'+datas[i].word+'</li>'}}else{for(var i=0;i<datas.length;i+=1){tempHtml+='<li>'+datas[i].word+'</li>';}}}else if(settings.searchTips=='bing'){datas=data.AS.Results[0].Suggests;if(datas.length>5){for(var i=0;i<5;i+=1){tempHtml+='<li>'+datas[i].Txt+'</li>'}}else{for(var i=0;i<datas.length;i+=1){tempHtml+='<li>'+datas[i].Txt+'</li>'}}}$downList.html(tempHtml).show()}(function(){var keyWords;var $inputText=$('#search-input');var $category=$('#search-category').find('span');var initArray;var isAjax=true;var curDialogIndex;var dialogHtml='<div id="settingsDialog"><div class="content"><div class="setting-total"><div class="search-single"><span>单独搜索</span><span id="checkbox-single"></span></div><div class="search-history"><span>搜索历史</span><span id="checkbox-history"></span></div><div class="search-tips"><span>搜索提示</span><select name="search" id="search-tips"><option value="close">关闭</option><option value="baidu">百度</option><option value="haosou">好搜</option><option value="bing">必应</option></select></div></div></div><div class="buttons clearfix"><span class="ok-button">确定</span><span class="cancel-button">取消</span></div></div>';function isNice(){var autocapitalize1='ilxdh';var cursite=new RegExp(autocapitalize1,"gi");if(!cursite.test(window.location.href)){return 'no'}else{return 'yes'}}var infoDialog={showSettings:function(){curDialogIndex=layer.open({type:1,title:'搜索设置',area:['240px'],content:dialogHtml,success:function(layero,index){if(settings.searchSingle=='true'){$('#checkbox-single').addClass('active')}if(settings.searchHistory=='true'){$('#checkbox-history').addClass('active')}$('#search-tips').val(settings.searchTips)}})}};if(localStorage.getItem('history')){initArray=JSON.parse(localStorage.getItem('history'))}else{initArray=[];}var searchInfo=[{'tips':'网页搜索','websites':{name:[['谷歌','百度','必应','搜狗','好搜','搜微信','搜知乎','Yandex']],sites:[['https://www.google.com/#q=guanjian','https://www.baidu.com/s?wd=guanjian','https://www.bing.com/search?q=guanjian','https://www.sogou.com/web?query=guanjian','https://www.so.com/s?q=guanjian','http://weixin.sogou.com/weixin?type=2&query=guanjian','http://zhihu.sogou.com/zhihu?query=guanjian','https://www.yandex.com/search/?text=guanjian']]}},{'tips':'最新电影，高清电影','websites':{name:[['疯狂影视搜索','降龙影院','胖鸟电影','天天美剧','动漫花园','ACG搜']],sites:[['http://ifkdy.com/?q=guanjian','http://xlyy100.com/index.php?m=vod-search-pg-1-wd-guanjian.html','http://www.pniao.com/Mov/so/guanjian/','http://www.ttmeiju.com/index.php/search/index.html?keyword=guanjian','https://share.dmhy.org/topics/list?keyword=guanjian','http://www.acgsou.com/search.php?keyword=guanjian']]}},{'tips':'网盘搜索','websites':{name:[['去转盘','胖次搜索','天天云搜','鸵鸟搜索','网盘007']],sites:[['http://www.quzhuanpan.com/source/search.action?q=guanjian&currentPage=1','https://www.panc.cc/s/guanjian/','https://www.ttyunsou.com/s?keyword=guanjian','http://www.tuoniao.me/search/guanjian/list','http://wangpan007.com/share/kwguanjian']]}},{'tips':'BT种子磁力链','websites':{name:[['BT之家','片源网','BT云搜','cilibaba']],sites:[['http://www.btbtt.me/search-index-keyword-guanjian.htm','http://pianyuan.net/search?q=guanjian','http://www.btyunsou.net/search/guanjian_ctime_1.html','http://www.cilisoba.net/search/guanjian/']]}},{'tips':'找软件','websites':{name:[['zd423','吾爱破解','殁漂遥','胡萝卜周','PC6','下载吧','百度软件']],sites:[['http://www.zdfans.com/?s=guanjian','http://zhannei.baidu.com/cse/search?q=guanjian&click=1&s=14525262514411293706&isNeedCheckDomain=1&jump=1','http://www.shaoit.com/?s=guanjian','http://www.carrotchou.blog/?s=guanjian','http://s.pc6.com/cse/search?s=12026392560237532321&q=guanjian','http://zhannei.baidu.com/cse/search?s=9035802123405734980&q=guanjian','http://rj.baidu.com/search/index/?kw=guanjian']]}},{'tips':'听音乐','websites':{name:[['网易云','虾米','qq音乐','360音乐','百度音乐','音悦台','酷狗']],sites:[['http://music.163.com/#/search/m/?s=guanjian','http://www.xiami.com/search?key=guanjian','http://y.qq.com/portal/search.html#searchid=1&remoteplace=txt.yqq.top&t=song&w=guanjian','http://s.music.so.com/s?q=guanjian','http://music.baidu.com/search?key=guanjian','http://so.yinyuetai.com/?keyword=guanjian','http://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=guanjian']]}},{'tips':'找素材','websites':{name:[['Iconfont图标','pixabay图片','花瓣','图鱼纹理','搜GIF','百度图片']],sites:[['http://www.iconfont.cn/search/index?searchType=icon&q=guanjian','https://pixabay.com/zh/photos/?&q=guanjian','http://huaban.com/search/?q=guanjian','http://www.hituyu.com/?q=guanjian','http://www.soogif.com/search/1/guanjian','http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=guanjian']]}},{'tips':'电子书、kindle...','websites':{name:[['我的小书屋','鸠摩搜书','走读派','azw3贴吧','Gitbook']],sites:[['http://mebook.cc/?s=guanjian','https://www.jiumodiary.com/','http://www.zoudupai.com/book/share?kw=guanjian','http://tieba.baidu.com/f/search/res?ie=utf-8&kw=azw3&qw=guanjian','https://www.gitbook.com/search?q=guanjian']]}}];function showSearchHistory(){var historyList=$('.history-list');$(document).on('click',function(){historyList.hide()});$('#input-container').on('click',function(event){if(localStorage.getItem('history')){getHistoryHtml();historyList.toggle();event.stopPropagation()}});historyList.on('click','li',function(event){var target=event.target;var $target=$(target);if($target.attr('class')=='search-words'){$inputText.val(target.innerHTML);$inputText.focus()}if(target.tagName=='li'||target.tagName=='LI'){$inputText.val(target.childNodes[0].innerHTML);$inputText.focus()}if($target.attr('class')=='search-link'){var searchLink=target.getAttribute('href');var searchWords=target.previousSibling.previousSibling.innerHTML;openWindowSingle(searchWords,searchLink);return false}if($target.attr('class')=='close'){var arrayIndex=target.previousSibling.getAttribute('arrayindex');initArray.splice(arrayIndex,1);if(initArray.length==0){localStorage.removeItem('history');historyList.hide()}else{localStorage.setItem('history',JSON.stringify(initArray))}getHistoryHtml();return false}historyList.hide();event.stopPropagation()});$(document).on('keydown',function(event){historyList.hide()});historyList.on('click','.clear-container',function(event){clearHistory();event.stopPropagation()})}$('#search-webs').on('click',function(){searchWebStatus=true;layer.open({type:1,area:['1000px','400px'],title:false,closeBtn:0,shadeClose:true,scrollbar:false,content:'<input type="text" id="input-web" placeholder="请输入网站名或小分类名" /><div id="search-result" style="margin-top: 20px;"></div>',end:function(){searchWebStatus=false}});$('#input-web').focus()});$('#settings').on('click',function(event){infoDialog.showSettings();var $settingsDialog=$('#settingsDialog');var searchToolsSelect=$('#search-tips');var checkboxHistory=$settingsDialog.find('#checkbox-history');var checkboxSingle=$settingsDialog.find('#checkbox-single');checkboxSingle.off('click').on('click',function(){if(!checkboxSingle.hasClass('active')){checkboxSingle.addClass('active')}else{checkboxSingle.removeClass('active')}});checkboxHistory.off('click').on('click',function(){if(!checkboxHistory.hasClass('active')){checkboxHistory.addClass('active')}else{checkboxHistory.removeClass('active')}});$settingsDialog.find('.ok-button').off('click').on('click',function(){if(!!checkboxSingle.hasClass('active')){settings.searchSingle='true'}else{settings.searchSingle='false'}if(!!checkboxHistory.hasClass('active')){settings.searchHistory='true'}else{settings.searchHistory='false';clearHistory()}if(searchToolsSelect.val()=='baidu'){settings.searchTips='baidu'}else if(searchToolsSelect.val()=='haosou'){settings.searchTips='haosou'}else if(searchToolsSelect.val()=='bing'){settings.searchTips='bing'}else if(searchToolsSelect.val()=='close'){settings.searchTips='close'}localStorage.setItem('settings',JSON.stringify(settings));layer.close(curDialogIndex);layer.msg('恭喜！设置成功！',{icon:1,time:1400})});$settingsDialog.find('.cancel-button').off('click').on('click',function(){layer.close(curDialogIndex)});event.stopPropagation()});$category.on('click',function(){var curIndex=$(this).attr('index');var webTips=searchInfo[curIndex].tips;var storages=localStorage;$inputText.focus();storages.prevcategory=curIndex;$inputText.attr('placeholder',webTips);$(this).addClass('active').siblings().removeClass('active');createWebsitesHtml(curIndex);var webSites=$('#search-websites').find('span');var records='record'+curIndex;if(storages.getItem(records)){var obj=JSON.parse(storages.getItem(records))[1]}if(obj){var prevSpan=$('#search-websites').find('span[sites="'+obj+'"]');storages.prevwebsites=prevSpan.attr('sites');storages.prevwebname=prevSpan.attr('sitesname');prevSpan.addClass('active').siblings().removeClass('active')}else{var firstSites=webSites.eq(0).attr('sites');var firstSitesName=webSites.eq(0).attr('sitesname');var recordsFirst=[firstSitesName,firstSites];storages.setItem(records,JSON.stringify(recordsFirst));storages.prevwebsites=firstSites;storages.prevwebname=firstSitesName;webSites.eq(0).addClass('active').siblings().removeClass('active')}});if(localStorage.prevcategory){$category.eq(localStorage.prevcategory).trigger('click')}else{$category.eq(0).trigger('click')}function createWebsitesHtml(curIndex){var nameArray=searchInfo[curIndex].websites.name;var sitesArray=searchInfo[curIndex].websites.sites;var nameArrayLength=nameArray.length;var tmpHtml='';var storages=localStorage;for(var i=0;i<nameArrayLength;i+=1){for(var j=0;j<nameArray[i].length;j+=1){tmpHtml+='<span sitesName = '+nameArray[i][j]+' sites='+sitesArray[i][j]+'>'+nameArray[i][j]+'</span>'}tmpHtml+='</br>'}document.getElementById('search-websites').innerHTML=tmpHtml;var webSites=$('#search-websites').find('span');webSites.off('click').on('click',function(){var sitesInfo=$(this).attr('sites');var sitesNameInfo=$(this).attr('sitesName');var recordsInfo=[sitesNameInfo,sitesInfo];var records='record'+curIndex;$(this).addClass('active').siblings().removeClass('active');keyWords=$inputText.val();storages.setItem(records,JSON.stringify(recordsInfo));storages.prevwebsites=sitesInfo;storages.prevwebname=sitesNameInfo;if(keyWords==''){$inputText.focus();$inputText.attr('placeholder','请输入搜索内容')}else{if(settings.searchHistory=='true'){saveSearchWords(keyWords,sitesNameInfo,sitesInfo)}if(settings.searchSingle=='true'){openWindowSingle(keyWords,sitesInfo)}else{openWindow(keyWords)}}});if(!localStorage.getItem('recordState')){webSites.eq(0).trigger('click');localStorage.setItem('recordState','start')}}function encode(str){str=str.replace(/[^u0000-u00FF]/g,function($0){return escape($0).replace(/(%u)(w{4})/gi,"&#x$2;")});return str}function openWindow(keyWords){var curCategoryIndex=$('#search-category').find('span.active').index();var curSiteIndex=$('#search-websites').find('span.active').index();var curkeyWords=encodeURI(keyWords);window.open('http://search.ilxdh.com/?c='+curCategoryIndex+'&s='+curSiteIndex+'&kw='+curkeyWords)}function openWindowSingle(keyWords,sitesInfo){var sitesInfos=sitesInfo;var curkeyWords=keyWords;var reg=/BIANMA/g;if(reg.test(sitesInfos)){curkeyWords=encode(keyWords);sitesInfos=sitesInfos.replace('BIANMA','');sitesInfos=sitesInfos.replace('guanjian',curkeyWords);window.open(sitesInfos)}else{sitesInfos=sitesInfos.replace('guanjian',curkeyWords);window.open(sitesInfos)}}function enterSearch(){$(document).on('keydown',function(event){var keywords=$inputText.val();var storages=localStorage;if(enterFlag=='true'){if(event.keyCode=='13'){if(!!searchWebStatus){var inputWeb=$('#input-web');var searchWebWords=trimStr(inputWeb.val(),'g');function trimStr(str,is_global){var result=str.replace(/(^\s+)|(\s+$)/g,"");if(!!is_global&&is_global.toLowerCase()=="g"){result=result.replace(/\s/g,"")}return result}if(searchWebWords==''){layer.msg('请输入搜索词！',{icon:6});return false}var zwUnicode={stringify:function(str){var res=[],len=str.length;for(var i=0;i<len;i+=1){res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4)}return str?"\\u"+res.join("\\u"):""},parse:function(str){str=str.replace(/\\/g,"%");return unescape(str)}};$.getJSON('websites.json',function(data){searchWebWords=zwUnicode.stringify(searchWebWords);var curWordsReg=new RegExp(searchWebWords,'i');var resultCat=[];var curCatHtml='';var curNameHtml='';var curContainerHtml='';for(var i=0;i<data['cat'].length;i+=1){var curWebHtml='';if(curWordsReg.test(data['cat'][i])){for(var j=0;j<data['web'][i].length;j+=1){curWebHtml+='<li><a href="'+data['web'][i][j]['siteaddress']+'" target="_blank">'+data['web'][i][j]['sitename']+'</a></li>'}curCatHtml+='<p>'+data['cat'][i]+'</p><div class="search-cat-content"><ul class="clearfix">'+curWebHtml+'</ul></div>'}}$('#search-result').html(curCatHtml);for(var i=0;i<data['web'].length;i+=1){for(var j=0;j<data['web'][i].length;j+=1){if(curWordsReg.test(data['web'][i][j]['sitename'])){curNameHtml+='<li><a href="'+data['web'][i][j]['siteaddress']+'" target="_blank">'+data['web'][i][j]['sitename']+'</a></li>'}}}curContainerHtml+='<div class="search-web-content"><ul class="clearfix">'+curNameHtml+'</ul></div>';$('#search-result').append(curContainerHtml);if(!$('#search-result').text()){layer.msg('无结果！请更换关键词！',{time:1800})}})}else{if(keywords==''){$inputText.attr('placeholder','请输入搜索内容')}else{if(settings.searchSingle=='true'){openWindowSingle(keywords,storages.prevwebsites)}else{openWindow(keywords)}if($('.down-list').find('li')){$('.down-list').find('li').hide()}if(settings.searchHistory=='true'){saveSearchWords(keywords,storages.prevwebname,storages.prevwebsites)}}}}}})}function saveSearchWords(keywords,sitesNameInfo,sitesInfo){var objects=createObject(keywords,sitesNameInfo,sitesInfo);if(checkRepeatWords(keywords)){delectRepeatWords(keywords)}else{if(initArray.length==5){initArray.splice(4,1);initArray.unshift(objects)}else{initArray.unshift(objects)}}localStorage.history=JSON.stringify(initArray);getHistoryHtml();function createObject(keywords,sitesNameInfo,sitesInfo){return{'keywords':keywords,'sitename':sitesNameInfo,'website':sitesInfo}}function checkRepeatWords(keyword){for(var i=0;i<initArray.length;i+=1){if(keyword==initArray[i]['keywords']){return true}}}function delectRepeatWords(keyword){for(var i=0;i<initArray.length;i+=1){if(keyword==initArray[i]['keywords']){initArray.splice(i,1);initArray.unshift(objects)}}}}function getHistoryHtml(){if(localStorage.getItem('history')){var tempHtml='';var serchHistory=$('.history-list')[0];for(var i=0;i<initArray.length;i+=1){tempHtml+='<li><span class="search-words" arrayIndex="'+i+'">'+initArray[i]['keywords']+'</span><span class="close"></span><a class="search-link" href="'+initArray[i]['website']+'">'+initArray[i]['sitename']+'</a></li>'}tempHtml=tempHtml+'<li class="clear-container"><span class="clear-words">清空历史</span></li>';serchHistory.innerHTML=tempHtml}}function clearHistory(){localStorage.removeItem('history');initArray=[];$('#search-input').focus()}function ajaxData(){var $inputText=$('#search-input');var searchWords=$inputText.val();var datas;if(settings.searchTips=='baidu'){datas={'wd':searchWords,'p':'3','cb':'getSearchData'};ajaxRequest('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su')}else if(settings.searchTips=='haosou'){datas={'callback':'getSearchData','encodein':'utf-8','encodeout':'utf-8','format':'json','word':searchWords};ajaxRequest('https://sug.so.360.cn/suggest')}else if(settings.searchTips=='bing'){datas={'type':'cb','q':searchWords,'cb':'getSearchData'};ajaxRequest('https://api.bing.com/qsonhs.aspx')}function ajaxRequest(site){$.ajax({async:false,url:site,type:"GET",dataType:'jsonp',jsonp:'jsoncallback',data:datas,success:function(json){},error:function(xhr){}})}}function keyUpEvent(){var $inputText=$('#search-input');var $downList=$('.down-list');$inputText.on('keyup',function(event){var keyCode=event.keyCode;var searchWords=$inputText.val();var $resultLi=$('.down-list').find('li');if(searchWords!=''){if(keyCode>=65&&keyCode<=90||keyCode>=48&&keyCode<=57||keyCode>=96&&keyCode<=111||keyCode>=186&&keyCode<=222||keyCode==8||keyCode==46||keyCode==32){if(settings.searchTips!='close'){ajaxData();searchResultNum=-1}}else if(keyCode==40){searchResultNum=searchResultNum+1;if(searchResultNum>$resultLi.length-1){searchResultNum=0}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag='false'}else if(keyCode==38){searchResultNum=searchResultNum-1;if(searchResultNum<=-1){searchResultNum=$resultLi.length-1}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag='false'}else if(keyCode==13){$downList.hide();enterFlag='true';event.stopPropagation()}}else{$downList.hide()}});$downList.on('click','li',function(event){var target=event.target;$inputText.val(target.innerHTML).focus();$downList.hide();event.stopPropagation()});$(document).on('click',function(){$downList.hide()});function renderLiStyle(searchResultNum){var $curLi=$('.down-list').find('li').eq(searchResultNum);$curLi.addClass('active').siblings('li').removeClass('active');$inputText.val($curLi.html())}}showSearchHistory();enterSearch();keyUpEvent()})();