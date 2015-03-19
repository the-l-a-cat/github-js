function unsubscribe_organization () {
    $("a[href*='/example-organization-name/']").each(function(){
        $("form.only-subed", $(this).parent("li")).submit();
        console.log ($('form',$(this).parent('li')).html());
    }); 
}
