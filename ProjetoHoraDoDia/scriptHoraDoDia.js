function loadFrame()
{
    var msgHour = window.document.getElementById("msgHour");
    var representationInPhotoTheHour = window.document.getElementById('representationInPhotoTheHour');

    var representationDate = new Date();
    var representationHour = representationDate.getHours();
    msgHour.innerHTML = `<b> Agora são  ${representationHour} horas </b>`;
    if(representationHour >= 0 && representationHour <= 12 )
    {
        representationInPhotoTheHour.src = 'fotomanha.png';
        window.document.body.style.background = '#f0e196';
    }
    else if(representationHour> 12 && representationHour < 18 )
    {
        representationInPhotoTheHour.src = 'fototarde.png';
        window.document.body.style.background = '#cb9217';
    }
    else
    {
        representationInPhotoTheHour.src = 'fotonoite.png';
        window.document.body.style.background = '#1c1e43';
    }
}
