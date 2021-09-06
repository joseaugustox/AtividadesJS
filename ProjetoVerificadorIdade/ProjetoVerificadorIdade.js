function checkAgeandSex()
{
    var agePersons = window.document.getElementById("agePersons");
    var result = window.document.getElementById("labelResult");
    var dateNow = new Date();
    var currentYear = dateNow.getFullYear();
   
    if(agePersons.value == 0 || agePersons.value > currentYear)
    {
        result.innerText = "Ano de nascimento Inválido";
    }
    else
    {
        var ageReturn = currentYear - agePersons.value;
        var typeSex = window.document.getElementsByName('chkSex');
        var sexPerson = returnSex(typeSex);
        result.innerHTML =  `Foi detectado uma pessoa de ${ageReturn} anos de idade e do sexo ${sexPerson}`;
        appearancePersonResult(ageReturn,sexPerson);
    }
}

function returnSex(typeSex)
{
    if(typeSex[0].checked)
        {
            return String("MASCULINO");
        }
        else
        {
            return String("FEMININO");
        }
}

function appearancePersonResult(ageReturn,sexPerson)
{
    var representationInPhotoAppearance = window.document.getElementById('representationInPhotoAppearance');
    if(ageReturn <= 15)
    {
        if(sexPerson == "MASCULINO")
        {
            representationInPhotoAppearance.src = 'kidboy.png';
        }
        else
        {
            representationInPhotoAppearance.src = 'kidgirl.png';
        }
    }
    else if (ageReturn <= 25)
    {
        if( sexPerson == "MASCULINO")
        {
            representationInPhotoAppearance.src = 'youngman.png';
        }
        else
        {
            representationInPhotoAppearance.src = 'younggirl.png';
        }
    }
    else if (ageReturn <= 60)
    {
        if(sexPerson == "MASCULINO")
        {
            representationInPhotoAppearance.src = 'man.png';
        }
        else
        {
            representationInPhotoAppearance.src = 'woman.png';
        }
    }
    else if (ageReturn > 60)
    {
        if(sexPerson == "MASCULINO")
        {
            representationInPhotoAppearance.src = 'oldman.png';
        }
        else
        {
            representationInPhotoAppearance.src = 'elderly.png';
        }
    }
}