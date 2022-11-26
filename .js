var plugin = {
    OpenTab : function(url)
    {
        var tab=window.open(url,'_blank');
        url = Pointer_stringify(url);
        setTimeout(tab);
    },

    showDownload : function()
    {
      var page = document.getElementById("download-display");
      page.style.display = "flex";
    }
};

var showPage = {

};
mergeInto(LibraryManager.library, plugin);