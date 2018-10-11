function Exo1()
{

$.ajax
    (
        {
            type:"get",
            url:"../PHP/getLesFormations.php",
            data: "id="+$('#lstActivité').val(),
            success:function(data)
            {

                $('#divFormation').empty();
                $('#divFormation').append(data);
            },

            error:function()
            { 
                alert("Erreur sur les activités");
            }
        }
    );
}
function Exo2()
{

}
function Exo3()
{

}
