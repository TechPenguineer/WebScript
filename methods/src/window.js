const window_properties = {
    title_string:""
}
var WebWindow = 
{
    title : function(title_str){
        window_properties.title_string = title_str
    }
}

console.log(`Title: ${window_properties.title_string}`)