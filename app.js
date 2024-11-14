document.addEventListener("DOMContentLoaded", function() {
    const excuseParagraph = document.getElementById("excusa");
  
    window.excuseGenerator = function() {
      const excuse = generateExcuse();
      excuseParagraph.innerHTML = excuse;
    };
  
    function generateExcuse() {
      let who = ["Alexis", "El gatito", "El mamahuevo number one", "El mamahuevazo", "El colorcito cartón"];
      let action = ["es", "nació", "c grifió", "c ventosió", "c chelió"];
      let what = ["bien mamahuevo", "con su color humilde", "bien cochino", "todo sucio", "la ventosidad andante" ];
      let when = [
        "de toda la vida",
        "mientras c pedorreaba",
        "cuando más negro estaba",
        "durante su partido de fifa",
        "hace un momento",
        "mientras se soltaba a él mismo por el váter"
      ];
  
      let randomWho = Math.floor(Math.random() * who.length);
      let randomAction = Math.floor(Math.random() * action.length);
      let randomWhat = Math.floor(Math.random() * what.length);
      let randomWhen = Math.floor(Math.random() * when.length);
  
      return (
        who[randomWho] + " " +
        action[randomAction] +
        " " +
        what[randomWhat] +
        " " +
        when[randomWhen]
      );
    }
  });