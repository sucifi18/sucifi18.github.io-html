$(document).ready(function(){
    $('.michu').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_gerak = rid[1];
        let nama_mhs = $('#nama_mhs__'+id_gerak).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Sudah Yakin ${nama_mhs} ??`);
            if(!konfirmasi) return;

            $('#gerak__'+id_gerak).fadeOut();
        }else{
            alert("Berisi : " + $(this).html() + "!");
        }
    })
})