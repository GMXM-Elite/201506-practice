/**
 * Created by Elite on 2015/9/13.
 */
exports.serialize=function(name,val,opt){
    opt=opt||{};
    var pairs=[name+'='+val];
    if(opt.maxAge){
        pairs.push('Max-Age='+opt.maxAge)
    }if(opt.domain){
        pairs.push('Domain='+opt.domain)
    }if(opt.path){
        pairs.push('Path='+opt.path)
    }if(opt.expires){
        pairs.push('expires='+opt.expires)
    }
    if(opt.httpOnly){
        pairs.push('HTTP='+opt.httpOnly);
    }
    if(opt.secure){
        pairs.push('secure='+opt.secure);
    }
    return pairs.join('; ');
}