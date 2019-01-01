$(function()
{
	$('#sty h4').click(function()
	{
		$(this).parent().parent().find('ul').slideUp();
		
		
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
		
	});
	
});