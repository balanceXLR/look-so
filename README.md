# look-so
类豆瓣电影评论网站
开发需知：
1.数据库修改：
用户：
user_type: 是否为管理员 1普通用户 2管理员
user_level: 用户评论等级（影评小白，资深评论人等）
user_status：是否封禁：1正常，2封禁
电影：
movie_slider: 电影长图（轮播图） 
moavie_status：是否下架：1正常，2下架
2.接口都写在src/js/api.js里了（除了用户头像修改在src/views/userInfo.vue中
