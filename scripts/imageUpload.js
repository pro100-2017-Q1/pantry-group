function PreviewImage(event) {
    console.log(event);
    var output = document.getElementById('PreviewImageID');
    output.src = URL.createObjectURL(event.target.files[0]);
}