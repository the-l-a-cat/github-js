/*
 * Run this function from
 * https://github.com/watching
 * and it will push buttons for you.
 */
function unsubscribe_from_organization (organization) {
    $("a[href*='/" + organization + "/']").each(function(){
        $("form.only-subed", $(this).parent("li")).submit();
        console.log ($('form',$(this).parent('li')).html());
    }); 
}
