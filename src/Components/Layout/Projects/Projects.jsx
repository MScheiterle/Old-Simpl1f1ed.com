import React, { useEffect } from "react";
import "./style.scss";
import CookieManager from "../../Utils/CookieManager";
import { projects } from "../../../Constants.ts";

function Projects() {
  useEffect(() => {
    const handleClickOutsideProjects = (e) => {
      const projectsContainer = document.querySelector(".projects");

      if (!projectsContainer.contains(e.target)) {
        const projects = projectsContainer.querySelectorAll(".project");

        projects.forEach((project) => {
          if (project !== document.activeElement) {
            project.classList.remove("focused");
          }
        });
      }
    };

    document.addEventListener("click", handleClickOutsideProjects);

    return () => {
      document.removeEventListener("click", handleClickOutsideProjects);
    };
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Flask: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid"
        >
          <title>Flask</title>
          <path d="M9.563 26.873c-1.22-.96-2.52-1.878-3.408-3.172-1.87-2.283-3.31-4.925-4.294-7.703-.595-1.806-.8-3.743-1.566-5.48-.802-1.26.138-2.64 1.52-3.04.615-.118 1.696-.7.39-.284-1.17.858-1.283-.78-.083-.884.82-.11 1.12-.78.84-1.382-.88-.574 2.132-1.203.616-2.06C2 1.168 5.786.84 4.852 2.774 4.63 4.26 7.498 2.5 6.832 4.218c.677.825 2.534.188 2.487 1.345.986.068 1.324.897 2.25.96.96.433 2.697.774 3.023 1.855-.95.753-3.153-1.555-3.26.53.288 3.08.214 6.252 1.34 9.185.533 1.775 1.825 3.173 2.99 4.556 1.117 1.354 2.63 2.308 4.17 3.11 1.352.638 2.81 1.06 4.283 1.326.597-.457 1.653-2.156 2.584-1.44.045.806-1.85 1.684-.09 1.595 1.035-.312 1.752.8 2.603-.204.785.93 3.26-.593 2.703 1.306-.755.487-1.856.193-2.612.863-1.247-.623-2.24.557-3.62.408-1.533.275-3.092.385-4.646.387-2.55-.2-5.153-.286-7.578-1.174-1.367-.397-2.7-1.175-3.9-1.954zm2.153.933c1.334.576 2.64 1.184 4.1 1.368 2.32.322 4.715.82 7.043.366-1.054-.476-2.143.185-3.193-.34-1.26.27-2.6-.07-3.9-.237-1.455-.648-3.026-1.094-4.388-1.936-1.703-.622.88.798 1.34.913 1.064.604-1.17-.3-1.486-.56-.892-.5-1.005-.396-.088.112l.56.314zm-2.54-1.794c1.293.48-.006-.91-.597-.83-.262-.455-1.003-.743-.48-.987-.94.326-.984-1.24-1.425-1.016-.994-.314-.387-1.426-1.57-2.11-.108-.72-1.176-1.343-1.516-2.428-.15-.556-1.207-2.15-.558-.666.552 1.43 1.524 2.653 2.334 3.875.628 1.164 1.37 2.38 2.514 3.107.386.37.758.937 1.302 1.053zm-3.724-4.09c.045-.195.236.422 0 0zm5.273 4.663c.286-.128-.412-.162 0 0zm.7.256c-.073-.353-.32.198 0 0zm.88.366c.418-.398-.645-.25 0 0zm1.506.84c.254-.375-.813-.14 0 0zm-2.89-2.015c.65-.42-.84-.006 0 0zm.66.33c-.02-.222-.235.1 0 0zm3.293 2.056c.53.334 3.092.732 1.488.137-.27.056-2.975-.766-1.488-.137zm-5.228-4.072c-.05-.222-.822-.246 0 0zm1.533.894c.4-.28-.828-.215 0 0zm1.3.8c.573-.216-.928-.217 0 0zM9.02 23.665c.62.476 2.506.06.95-.284-.707-.377-2.3-.635-1.214.227l.263.057zm4.32 2.637c.26-.44-1.086-.252 0 0zm-1.313-1.043c1.52.43-1.277-.96-.375-.16l.2.09.175.068zm2.632 1.52c1.44.014-1.3-.2 0 0zm-6.193-3.947c-.056-.268-.355.022 0 0zm8.627 5.312c.038-.484-.47.36 0 0zm-6.17-3.81c-.087-.255-.45-.01 0 0zm-2.32-1.67c.826-.05-1.13-.364 0 0zM5.856 20.89c-.103-.396-.898-.712 0 0zm7.212 4.577c-.15-.173-.07.037 0 0zm4.488 2.755c-.014-.264-.244.1 0 0zm-4.885-3.165c.08-.34-.705-.103 0 0zm-3.344-2.12c.615-.065-.985-.415 0 0zm5.656 3.515c.958-.38-.933-.185 0 0zm-2.942-1.997c1.103.142-1.313-.75-.243-.08l.243.08zm3.835 2.358c1.03-.615.69 1.443 1.748.174 1.043-.762-.9.942.384.136.93-.622 2.303.295 3.17.593.624-.03 1.23.54 1.87.193 1.23-.332-2.408-.492-1.454-1.08-1.126.328-1.958-.39-2.513-1.112-1.264-.292-2.724-.938-3.355-2.056-.257-.42.37.06-.222-.627-.76-.677-1.14-1.446-1.652-2.27-.61-.325-.683-1.284-.744-.032.005-.79-.737-1.323-.92-1.102-.003-.76.795-.38.236-.942-.12-.79-.516-1.61-.634-2.502-.185-.43-.026-1.35-.63-.377-.22 1.027-.073-1.262.27-.508.45-.77-.162-.68-.186-.573.293-.65.186-1.572-.077-1.22.156-.69.247-2.535-.233-2.208.29-.72.552-3.297-.712-2.315-.512.007-1.398.186-1.817.394 1.313.724-.132.262-.668.146-.07.67-.6.38-1.26.387 1.058.13-.515 1.08-1.12.712-.788.376.68 1.316.015 1.607.082.437-1.207-.158-1.106.854-.764-.322-.105 1.2.278.685 1.3.352.915 1.154.948 1.917-.212.444-1.046-1.044-.186-.975-.68-1.103-.75-.4-1.315.114-.13.037 1.44.73.454 1.07.867.134.892.893 1.068 1.372.52.543.413-.6 1.037.053-.395-.58-2.09-1.637-.725-1.3-.007-.584-.247-1.056.172-1.045.415-.75-.434 1.85.5.896.258-.113.323-.75.787.06.674.664.244 1.144-.708.536.17.578 1.273.784 1.065 1.687.22.795.527.502.795.456.2.772.33.204.34-.163.962.206.736.775 1.038 1.172.663.3-.95-2.028.19-.7 1.197 1.08.45 1.533-.625 1.36.68-.055.9.92 1.75.885.776.37 1.3 1.787-.036 1.196-.463-.418-2.106-.934-.764-.14 1.238.574 2.222.916 3.416 1.637.854.6 1.223 1.308 1.547 1.447-.718.343-2.164-.274-1.1-.463-.67-.122-1.424-.46-.782.374.546.456 1.933.408 2.182.46-.21.464-.573.5.008.537-.648.346.208.4.268.597zm-1.326-3.744c-.395-.413-.497-1.185-.07-.513.22.088.7 1.263.07.513zM18.87 25.8c.246-.016.007.187 0 0zm-4.94-3.755c-.016-.624.142.48 0 0zm-.43-.577c-.497-.96.625.27 0 0zm-5.202-3.6c.292-.078.144.498 0 0zm4.14 2.244c.18-.673.2.564 0 0zm-2.925-2.034c-.206-.37.43.348 0 0zm2.51.804c-.47-1.053.334-.575.105.172l-.105-.172zm-4.328-2.886c-.2-.346-.557-1.36-.445-1.67.1.504 1.072 2.17.476.7-.658-1.24.787.402.936.712.07.307-.406-.084-.084.638-.588-.822-.347.454-.882-.37zm-1.337-.922c.055-.804.306.55 0 0zm.602.208c.287-.606.486.845 0 0zM5.5 14.182c-.498-.495-.858-.95.024-.307.34.013-.755-1.037.082-.334.88.16.434 1.443-.105.64zm.76-.02c.29-.287.154.282 0 0zm.468.15c-.44-.822.532.345 0 0zm-.93-.888c-1.448-1.29 1.82.673.236.24l-.236-.24zm4.148 2.41c-.627-.375-.167-2.644.047-1.093.61-.197-.034.802.42.792-.07.63-.275.857-.467.3zm1.534.907c.06-.684.13.468 0 0zm-.266-.264c.07-.292.006.344 0 0zM6.092 13c-.93-1.283 2.703 1.298.596.325-.22-.058-.485-.078-.596-.325zm2.955 1.566c-.088-1.08.196.18 0 0zm2.243 1.44c.173-.615.013.407 0 0zM6.235 12.51c.553-.118 2.3.97.695.31-.177-.196-.556-.107-.695-.31zm4.746 2.366c.06-1.105.33-.66.002.16l-.002-.16zm-4.335-2.75c.226-.33-.598-1.493.118-.417.3.246.897.412.38.516.815.72-.2.195-.497-.1zm4.1 2.406c.155-1.26.137.737 0 0zm-4.57-3.568c.172-.074.09.23 0 0zm1.07.637c.275-.578.508.644 0 0zm3.017 1.678c-.002-.22.057.323 0 0zm-.175-.386c-.418-1.033.4.547 0 0zm-.257-.678c-.07-.427.24.536 0 0zm.418-.68c-.288-.506.363-2.23.436-1.16-.303.834-.087 1.3.123.18.39-.88-.084 1.737-.56.98zm.43-2.566c.125-.154.028.185 0 0zM9.96 23.12c-.17-.15.022.094 0 0zm1.48.748c.823.212.82-.128.075-.23-.4-.372-1.662-.767-.532-.046.074.2.31.185.457.275zm-2.92-1.94c.453.34 1.707.958.646.13.358-.416-.685-.638-.34-.916-.88-.54-.695-.5-.078-.473-1.058-.473.153-.437.096-.68-.408-.08-2.026-.72-1.074.052-.968-.493-.23.184-.523.113-1-.27.88.754-.157.5.567.45 1.528 1.153.24.476-.17.244.922.615 1.2.8zm1.547.89c1.88.606-.923-.74 0 0zm7.92 4.798c.024-.374-.257.32 0 0zm.814.343c.434-.42.018.67.72-.103.007-.553-.02-.88-.806-.208-.217.12-.313.63.087.31zM5.878 19.84c-.133-.524-.934-.522 0 0zm.87.57c-.323-.535-1.152-.485 0 0zm4.946 2.983c.483.43 2.218.315.586.053-.24-.357-1.533-.27-.586-.053zm6.798 4.2c.743-.624-.72.278 0 0zm1.546 1.062c.005-.2-.32.087 0 0zm.003-.28c.823-.87-.797.05 0 0zM3.74 18.05c-.7-1-.436-1.45-1.112-2.267-.128-.625-1.16-2.043-.534-.54.574.88.744 2.24 1.646 2.81zm16.04 10.046c1.515-.978-.62-.426 0 0zm1.156.453c.76-.65-.48-.136 0 0zM5.62 18.735c.217-.323-.56-.042 0 0zm15.075 9.505c.734-.473-.17-.4-.133.043l.133-.043zm-9.962-6.28c-.025-.32-.388.027 0 0zm.615.354c-.196-.396-.3.062 0 0zm10.525 6.245c.94-.68-.57-.13-.197.13l.197-.13zm-.36-.174c.767-.642-.81.284 0 0zm1.84 1.225c.514-.344-.625-.11 0 0zm-17.26-11.11c.69.154 2.755 1.698 1.537.107-.624-.185-.25-1.71-.887-1.44.427.714.35 1.018-.546.568-1.127-.55-.633.272-.413.5-.3.07.397.26.31.266zm-3.14-2.48c.123-.51-1.137-2.81-.595-1.152.195.347.175 1.005.595 1.152zm5.766 3.555c-.356-.297-.017-.042 0 0zm.874.204c0-.54-.966-.22 0 0zm7.577 4.776c-.145-.37-.57-.008 0 0zm.364.266c-.054-.207-.2.04 0 0zm3.003 1.892c.29-.213-.36-.028 0 0zM4.52 16.422c.826-.32-.885-.228 0 0zM16.5 23.97c-.01-.535-.527.133 0 0zM4.193 15.66c.53-.18-.49-.118 0 0zm1.54.746c-.01-.176-.163.067 0 0zm18.788 11.52c.682-.138 2.238.347 2.49-.18-.83-.02-2.867-.585-2.963.134l.18.03.293.018zM6.223 16.53c.012-.542-.422-.02 0 0zm-4.05-2.81c-.184-1.032-.7-.156 0 0zm.965.243c.012-.332-.884-.298 0 0zm.552.27c-.16-.13-.124.163 0 0zm3.473 2.227c.164-.15-.387-.11 0 0zm-3.84-2.84c-.094-.78-1.12-.117 0 0zm-1.98-1.285c-.028-.36-.193.136 0 0zm.295-.222c-.048-.427-.253.054 0 0zm1.627.97c.688-.27-1.253-.56-.14-.05l.14.05zM25.043 26.54c.44-.404-.56-.125 0 0zm2.63 1.363c.177-.52-.445.07 0 0zM3.43 12.235c.073-.505-.546.1 0 0zm-2.316-1.55C.992 9.97 1.01 8.72 2.198 9.142c-1.587.316 1.1 1.974.76.664.668.033 1.306-.395.955.253C5.23 9.916 6.14 8.774 7.412 8.935c1-.132 2.072-.23 3.14-.63.877-.063 1.72-1.007 1.24-1.567-1.196-.1-2.448.048-3.77.312-1.465.304-2.795.883-4.273 1.13-1.44.194.29.533-.123.61-.75.26.897.436-.097.712-.614-.117-1.253-.328-.99-.975-1.38.18-2.593.752-1.502 2.156l.08.001zM4.442 9c.323-1.192 1.733.98.53.16-.143-.108-.38-.195-.53-.16zm.063-.578c.467-.347.248.195 0 0zm.593.01c.043-.548 1.358.3.217.197l-.217-.197zm.81-.326c.297-.347.086.307 0 0zm.208-.14c.494-.593 2.793-.38 1.1-.058-.45-.34-.797.2-1.1.058zm3-.463c-.074-1.62 1.492.575 0 0zm.852-.005c.31-.816 1.21-.328.145-.164.023.087-.032.422-.145.164zm-6.873 4.327c.93-.57-.987-.494 0 0zm.688.2c.326-.347-.7-.14 0 0zM1.757 10.57c.53-.41-.63-.155 0 0zm27.47 17.185c.015-.474-.406.213 0 0zm-2.79-1.905c.08-.545-.36.047 0 0zm3.56 2.09c.743.003 2.252-.23.635-.23-.254.04-1.48.03-.635.23zM4.39 11.673c.602-.04.94-.663-.117-.628-1.64-.17 1.446.562-.2.352-.222.147.314.316.327.275zm.53.268c-.063-.386-.186.205 0 0zm.63-1.676c.26-.324-.36-.087 0 0zm-2-3.344c1.074-.365 2.542-.775 3.05.18-.516-.62-.208-1.232.28-.324.69.918 1.034-.418.586-.726.51.634 1.09.934.342.04.815-.98-1.63.128-2.186.117-.267.12-2.76.636-2.07.713zm.63-1.205c.612-.462 2.118.275 1.152-.46-.095-.083-2.115.557-1.152.46zm2.232.092c.716.018-.31-.963.544-.518-.14-.458-.994-.543-1.412-.727-.236.418.48 1.25.867 1.245zm-1.84-2.026c.248-.336-.435.17 0 0zM5.48 4c1.155-.153-.294-.497-.233-.012L5.48 4zM3.776 2.67c-.813-1.062 1.53.178.703-.933-.696-.553-1.363.624-.703.933zm10.434 5.62c.373-.66-1.54-.89-.25-.234.118.04.092.28.25.234z" />
        </svg>
      ),
      Python: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <title>Python</title>
          <defs>
            <linearGradient
              id="A"
              x1="811.527"
              y1="574.895"
              x2="665.255"
              y2="573.732"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#366a96" />
              <stop offset="1" stopColor="#3679b0" />
            </linearGradient>
            <linearGradient
              id="B"
              x1="862.824"
              y1="642.176"
              x2="573.276"
              y2="642.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffc836" />
              <stop offset="1" stopColor="#ffe873" />
            </linearGradient>
          </defs>
          <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
            <path
              d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z"
              fill="url(#A)"
            />
            <path
              d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z"
              fill="url(#B)"
            />
            <path
              d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z"
              fill="#fff"
            />
          </g>
        </svg>
      ),
      CSS: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          id="svg3476"
          version="1.1"
        >
          <title>CSS</title>
          <g id="layer1" transform="translate(-193.633,-739.48031)">
            <polygon
              style={{ fill: "#264de4" }}
              points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 "
              id="polygon2989"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
            <polygon
              style={{ fill: "#2965f1" }}
              points="256,480.523 376.03,447.246 404.27,130.894 256,130.894 "
              id="polygon2991"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
            <polygon
              style={{ fill: "#ebebeb" }}
              points="256,268.217 150.31,268.217 154.38,313.627 256,313.627 "
              id="polygon2993"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
            <polygon
              style={{ fill: "#ebebeb" }}
              points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 "
              id="polygon2995"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
            <polygon
              style={{ fill: "#ebebeb" }}
              points="156.409,336.333 162.771,407.634 255.791,433.457 256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 "
              id="polygon2997"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
            <polygon
              style={{ fill: "#ffffff" }}
              points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 "
              id="polygon3005"
              transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
            />
          </g>
        </svg>
      ),
      JS: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
          fill="#558"
        >
          <title>JavaScript</title>
          <path d="M.774 22.15c0-.48.067-.885.2-1.213a2.17 2.17 0 0 1 .583-.813 2.31 2.31 0 0 1 .86-.445c.328-.092.68-.138 1.06-.138a3.62 3.62 0 0 1 1.013.138c.327.092.614.24.86.445s.44.476.583.813c.143.328.215.732.215 1.213 0 .46-.072.854-.215 1.182a2.27 2.27 0 0 1-.583.813c-.245.215-.532.368-.86.46a3.29 3.29 0 0 1-1.013.153c-.38 0-.732-.05-1.06-.153a2.19 2.19 0 0 1-.86-.46c-.246-.215-.44-.486-.583-.813-.133-.327-.2-.72-.2-1.182m8.656 9.746c-.5 0-.998-.036-1.52-.107s-.957-.164-1.304-.276V27.83c.317.102.614.174.9.215a5.27 5.27 0 0 0 .936.077c.256 0 .496-.04.72-.123a1.16 1.16 0 0 0 .6-.414c.174-.194.312-.46.414-.798.102-.327.153-.752.153-1.274V7.188h4.68v19.015c0 .788-.102 1.524-.307 2.2a4.43 4.43 0 0 1-.967 1.8c-.44.522-1.013.93-1.72 1.228s-1.565.445-2.578.445m.7-29.144c0-.44.067-.803.2-1.1s.312-.532.537-.706c.235-.184.506-.312.813-.384.317-.072.65-.107.998-.107a4.29 4.29 0 0 1 .982.107 1.94 1.94 0 0 1 .798.384 1.74 1.74 0 0 1 .552.706c.143.287.215.65.215 1.1 0 .43-.072.793-.215 1.1-.133.297-.317.537-.552.72a2.22 2.22 0 0 1-.798.384 4.29 4.29 0 0 1-.982.108c-.348 0-.68-.035-.998-.108a2.39 2.39 0 0 1-.813-.384c-.225-.184-.404-.425-.537-.72s-.2-.66-.2-1.1m21.12 16.518c0 .9-.164 1.688-.5 2.363a4.54 4.54 0 0 1-1.397 1.688c-.604.45-1.335.788-2.195 1.013s-1.82.338-2.885.338c-.563 0-1.085-.02-1.565-.06a11.14 11.14 0 0 1-1.366-.169c-.43-.082-.844-.184-1.243-.307a10.48 10.48 0 0 1-1.212-.46V19.79c.43.215.88.4 1.35.583l1.427.46 1.366.292a7.91 7.91 0 0 0 1.243.107c.42 0 .778-.035 1.074-.107.297-.082.537-.2.72-.322.194-.143.333-.307.414-.5a1.42 1.42 0 0 0 .138-.614c0-.215-.036-.404-.107-.568-.06-.174-.2-.353-.445-.537-.235-.194-.583-.4-1.044-.644l-1.826-.9-1.95-.998c-.542-.338-.992-.7-1.35-1.12a4.17 4.17 0 0 1-.783-1.397c-.174-.532-.26-1.16-.26-1.888 0-.798.153-1.494.46-2.087a4.1 4.1 0 0 1 1.304-1.504c.563-.4 1.238-.696 2.026-.9.798-.205 1.683-.307 2.655-.307 1.023 0 1.995.118 2.916.353s1.867.588 2.84 1.06l-1.412 3.315c-.778-.368-1.52-.67-2.225-.905a6.67 6.67 0 0 0-2.118-.353c-.634 0-1.095.113-1.38.338-.276.225-.414.532-.414.92 0 .205.036.4.107.553.072.154.215.317.43.5.215.164.517.348.905.552l1.52.72 1.964.95a6.68 6.68 0 0 1 1.504 1.059 4.13 4.13 0 0 1 .967 1.397c.225.532.338 1.177.338 1.934" />
        </svg>
      ),
      Java: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <title>Java</title>
          <path
            d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
            fill="#4e7896"
          />
          <path
            d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
            fill="#f58219"
          />
        </svg>
      ),
      SASS: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
          <title>SASS</title>
          <path
            d="M55.094 35.56c-2.238.013-4.175.55-5.8 1.35-.6-1.188-1.2-2.225-1.3-3-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588a14.36 14.36 0 0 0-.538 1.913c-.225 1.175-2.575 5.338-3.913 7.526-.438-.85-.813-1.6-.888-2.2-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588-.263 1.138-.538 1.913c-.263.775-3.388 7.726-4.2 9.538-.413.925-.775 1.663-1.038 2.163s-.012.038-.037.088l-.35.663v.012c-.175.313-.363.613-.45.613-.062 0-.188-.838.025-1.988.463-2.413 1.588-6.176 1.575-6.313 0-.062.213-.725-.725-1.063-.913-.338-1.238.225-1.313.225s-.138.2-.138.2 1.013-4.238-1.938-4.238c-1.85 0-4.4 2.013-5.663 3.85l-6.376 3.488-.138-.15C11.178 35.66 4.565 32.96 4.84 27.835c.1-1.863.75-6.776 12.7-12.726 9.788-4.875 17.627-3.538 18.99-.563 1.938 4.25-4.188 12.15-14.364 13.29-3.875.438-5.913-1.063-6.426-1.625-.538-.588-.613-.613-.813-.5-.325.175-.125.7 0 1.013.3.788 1.55 2.188 3.675 2.888 1.863.613 6.413.95 11.914-1.175 6.163-2.388 10.976-9.013 9.563-14.55-1.438-5.638-10.788-7.488-19.627-4.35C15.19 11.41 9.5 14.334 5.4 18.172.515 22.722-.26 26.698.064 28.348c1.138 5.888 9.25 9.726 12.5 12.564l-.45.25c-1.625.8-7.813 4.038-9.363 7.463-1.75 3.875.275 6.663 1.625 7.038 4.175 1.163 8.45-.925 10.763-4.363 2.3-3.438 2.025-7.9.963-9.938l-.038-.075 1.275-.75c.825-.488 1.638-.938 2.35-1.325-.4 1.088-.688 2.375-.838 4.25-.175 2.2.725 5.05 1.913 6.176.525.488 1.15.5 1.538.5 1.375 0 2-1.138 2.688-2.5.85-1.663 1.6-3.588 1.6-3.588s-.938 5.213 1.625 5.213c.938 0 1.875-1.213 2.3-1.838v.012s.025-.038.075-.125c.1-.15.15-.238.15-.238v-.025c.375-.65 1.213-2.138 2.463-4.6 1.613-3.175 3.163-7.15 3.163-7.15s.15.975.613 2.575c.275.95.875 1.988 1.338 3l-.6.825.012.013a35.62 35.62 0 0 1-.988 1.25c-1.275 1.525-2.8 3.263-3 3.763-.238.588-.188 1.025.275 1.375.338.25.938.3 1.575.25 1.15-.075 1.95-.363 2.35-.538a8.14 8.14 0 0 0 2.025-1.063c1.25-.925 2.013-2.238 1.938-3.988-.038-.963-.35-1.913-.738-2.813l.338-.5c1.975-2.888 3.5-6.063 3.5-6.063s.15.975.613 2.575c.238.813.713 1.7 1.138 2.575-1.85 1.513-3.013 3.263-3.413 4.413-.738 2.125-.163 3.088.925 3.313.488.1 1.188-.125 1.713-.35.65-.213 1.438-.575 2.163-1.113 1.25-.925 2.45-2.213 2.388-3.95-.038-.8-.25-1.588-.538-2.338 1.575-.65 3.613-1.025 6.2-.713 5.563.65 6.663 4.125 6.45 5.575s-1.375 2.25-1.763 2.5c-.388.238-.513.325-.475.5.05.263.225.25.563.2.463-.075 2.925-1.188 3.025-3.863.15-3.438-3.113-7.188-8.9-7.15zM12.19 50.025c-1.838 2.013-4.425 2.775-5.525 2.125-1.188-.688-.725-3.65 1.538-5.788 1.375-1.3 3.163-2.5 4.338-3.238l1.138-.688c.075-.05.125-.075.125-.075.088-.05.188-.113.288-.175.838 3.05.038 5.725-1.9 7.838zm13.44-9.138c-.638 1.563-1.988 5.575-2.8 5.35-.7-.188-1.125-3.225-.138-6.226.5-1.513 1.563-3.313 2.188-4.013 1.013-1.125 2.113-1.5 2.388-1.038.325.6-1.238 4.95-1.638 5.926zm11.088 5.3c-.275.138-.525.238-.638.163-.088-.05.113-.238.113-.238s1.388-1.488 1.938-2.175l1.088-1.388v.15c0 1.8-1.725 3-2.5 3.488zm8.55-1.95c-.2-.15-.175-.613.5-2.063.263-.575.863-1.538 1.9-2.45.125.375.2.738.188 1.075-.013 2.25-1.613 3.088-2.588 3.438z"
            fill="#cf649a"
          />
        </svg>
      ),
      Firebase: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="64"
          viewBox="0 0 32 32"
          width="64"
        >
          <title>Firebase</title>
          <path
            d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
            fill="#ffa000"
          />
          <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17" />
          <path
            d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
            fill="#ffca28"
          />
          <path
            d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
            fill="#ffa000"
          />
        </svg>
      ),
      HTML: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <title>HTML</title>
          <path
            d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z"
            fill="#e44d26"
          />
          <path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529" />
          <path
            d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z"
            fill="#ebebeb"
          />
          <path
            d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z"
            fill="#fff"
          />
        </svg>
      ),
      TS: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
          <title>TypeScript</title>
          <path
            d="M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z"
            fill="#007acc"
          />
        </svg>
      ),
      React: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 32 32"
        >
          <title>React</title>
          <g
            transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
            fill="none"
            fillRule="evenodd"
          >
            <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
            <g stroke="#00d8ff" strokeWidth="24">
              <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
              <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
              <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
            </g>
          </g>
        </svg>
      ),
    };

    return icons[iconName] || "";
  };

  useEffect(() => {
    new CookieManager().setCookie(
      "Simpl1f1ed.com-viewedProjects",
      `${Date.now()}`,
      {
        expires: 7,
      }
    );
    document.title = "Simpl1f1ed.com - Projects";

    return () => {
      document.title = "Simpl1f1ed.com";
    };
  }, []);

  return (
    <div id="Projects" className="page">
      <div className="projects">
        {projects.map((project, index) => (
          <div
            className="project"
            key={`${project.name}:${index}`}
            tabIndex="0"
            onClick={(e) => {
              const projectsContainer = document.querySelector(".projects");
              const projects = projectsContainer.querySelectorAll(".project");

              projects.forEach((project) => {
                project.classList.remove("focused");
              });
              if (!e.currentTarget.classList.contains(".focused")) {
                e.currentTarget.classList.add("focused");
              }
            }}
          >
            <div className="header">
              {project.githubLink ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              ) : (
                <></>
              )}
              <h1>{project.name}</h1>
              {project.timespan ? (
                <p className="details">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  {project.timespan}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="technologies">
              {project.technologies.map((technology) => (
                <span key={`${technology}:${project.name}:${index}`}>
                  {getIcon(technology)}
                </span>
              ))}
            </div>
            <div className="status">
              {project.status === "finished" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  Done
                </>
              ) : project.status === "current" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                  Working
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                  </svg>
                  Idea
                </>
              )}
            </div>
            <div className="description">
              <p>{project.description}</p>
              {project.githubLink ? (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <button>
                    <span>View On GitHub</span>
                  </button>
                </a>
              ) : (
                <>Closed Source</>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
