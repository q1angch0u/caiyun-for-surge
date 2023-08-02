var body = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    body.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
    };
    body.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
    };
}

if ($request.url.indexOf(adhf) != -1){
    body.activities = [];
}

if ($request.url.indexOf('user') != -1){
    body.result.ranking_above = 99;
    body.result.is_vip = true;
    body.result.vip_expired_at = 4092599349;
    body.result.svip_given = 9999;
    body.result.is_xy_vip = true;
    body.result.xy_svip_expire = 4092599349;
    body.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
    };
    body.result.wt.svip_given = 9999;
    body.result.wt.ranking_above = 99;
    body.result.is_phone_verified = true;
    body.result.name = "花生猫";
    body.result.avatar = "https://q1angch0u.oss-cn-beijing.aliyuncs.com/img/1409601690960796_.pic.jpg";
    body.result.phone_num = "13800000000";
    body.result.vip_take_effect = 1;
    body.result.is_primary = true;
    body.result.xy_vip_expire = 4092599349;
    body.result.svip_expired_at = 4092599349;
    body.result.svip_take_effect = 1;
    body.result.vip_type = "s";
    body.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    body.result.bound_status.qq.username = "花生猫";
    body.result.bound_status.weixin.username = "花生猫";
    body.result.bound_status.caiyun.username = "花生猫";
    body.result.bound_status.twitter.username = "花生猫";
    body.result.bound_status.facebook.username = "花生猫";
    body.result.bound_status.apple.username = "花生猫";
    body.result.bound_status.weibo.username = "花生猫";
}

$done({ body: JSON.stringify(body)});