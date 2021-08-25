import styles from '../styles/InitialPage.module.scss'
import { Link } from 'react-scroll'

export default function Home({ projects }) {
  return (
    <div className={styles.container}>
      <nav>
        <h1>Gabriel</h1>

        <ul>

          <li>Início</li>
          <li><Link to="about" smooth={true}>Sobre</Link></li>
          <li><Link to="projects" smooth={true}>Projetos</Link></li>
          <li><Link to="experiences" smooth={true}>Experiências</Link></li>
          <li><Link to="contact" smooth={true}>Contatos</Link></li>

        </ul>
      </nav>
      <header>

        <div>

          <h1>Comece a ter comprometimento com o seu projeto</h1>
          <p>WebDeveloper & UI/UX Designer</p>

        </div>
        <div>

          <svg width="364" height="239" viewBox="0 0 364 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.8 234C114.902 234 146.6 199.974 146.6 158C146.6 116.026 114.902 82 75.8 82C36.6982 82 5 116.026 5 158C5 199.974 36.6982 234 75.8 234Z" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M288.2 234C327.302 234 359 199.974 359 158C359 116.026 327.302 82 288.2 82C249.098 82 217.4 116.026 217.4 158C217.4 199.974 249.098 234 288.2 234Z" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M146.6 158L150.335 155.986C160.166 150.709 171.008 147.961 182 147.961C192.992 147.961 203.834 150.709 213.665 155.986L217.4 158" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M305.9 6L356.132 131.837C358.023 136.568 358.999 141.661 359 146.809V158" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M58.1 6L7.8674 131.837C5.97911 136.562 5.00363 141.649 5 146.79V158" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </div>

      </header>

      <div className={styles.arrow}>

        <Link smooth={true} to="contact">

          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="51" height="51" rx="25.5" fill="black" />
            <path d="M25.7419 15V36M25.7419 36L18 28.5333M25.7419 36L33 28.5333" stroke="white" strokeWidth="4" />
          </svg>

        </Link>

      </div>

      <about id="about">

        <div>

          <svg width="248" height="241" viewBox="0 0 248 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M220.236 213.048C220.236 213.048 220.426 209.083 224.312 209.544L220.236 213.048Z" fill="#3F3D56" />
              <path d="M219.138 209.274C220.212 209.274 221.083 208.405 221.083 207.333C221.083 206.26 220.212 205.391 219.138 205.391C218.064 205.391 217.193 206.26 217.193 207.333C217.193 208.405 218.064 209.274 219.138 209.274Z" fill="black" />
              <path d="M219.371 210.603H218.822V214.439H219.371V210.603Z" fill="#3F3D56" />
              <path d="M88.1909 96.4711C88.1909 97.4421 88.1594 98.405 88.0964 99.3598C87.7429 104.867 86.3493 110.257 83.9891 115.247C83.9708 115.289 83.9493 115.329 83.9312 115.368C83.8213 115.6 83.7084 115.831 83.5926 116.059C82.8906 117.471 82.1119 118.842 81.2599 120.169C77.3681 126.258 72.0339 131.296 65.7286 134.838C59.4233 138.38 52.3411 140.317 45.1078 140.478L45.5439 165.512L51.2307 162.523L52.2462 164.45L45.5866 167.951L46.4007 214.445L46.4098 215.066L42.0128 216.043L42.0219 215.419L43.4062 140.482C37.5841 140.398 31.8365 139.161 26.4973 136.842C21.158 134.523 16.3335 131.168 12.3037 126.972C12.0263 126.686 11.7518 126.391 11.4835 126.099C11.4713 126.086 11.4622 126.074 11.4529 126.065C8.0954 122.41 5.38002 118.215 3.42121 113.658C3.46394 113.706 3.50964 113.752 3.55238 113.801C-0.874614 103.466 -1.17487 91.8329 2.71315 81.2845C6.60117 70.7362 14.383 62.0716 24.4641 57.0662C24.6166 56.9901 24.7722 56.9171 24.9247 56.841C34.8967 52.046 46.3094 51.1662 56.9007 54.3759C67.492 57.5857 76.4887 64.6507 82.1075 74.1706C82.376 74.6211 82.6352 75.0807 82.8852 75.5434C86.3755 81.968 88.1995 89.1625 88.1909 96.4711Z" fill="#E5E5E5" />
              <path d="M82.2551 115.392C114.175 115.392 140.051 89.5609 140.051 57.6962C140.051 25.8315 114.175 0 82.2551 0C50.3355 0 24.4595 25.8315 24.4595 57.6962C24.4595 89.5609 50.3355 115.392 82.2551 115.392Z" fill="black" />
              <path opacity="0.2" d="M39.5807 19.1597C27.0325 48.4616 40.6551 82.3703 70.0075 94.8969C81.1438 99.6495 93.4943 100.79 105.315 98.157C117.135 95.5242 127.829 89.2511 135.885 80.2236C123.339 109.526 89.3718 123.127 60.0184 110.602C30.6651 98.0768 17.0408 64.1685 29.5876 34.8657C32.0456 29.1252 35.4205 23.8209 39.5807 19.1597Z" fill="black" />
              <path d="M85.3826 218.427L79.4792 216.774L79.4914 216.141L81.26 120.169L81.3485 115.384L81.3515 115.244L81.6595 98.4771L82.1077 74.1736V74.1706L82.4126 57.6964H82.5743L82.8853 75.5434L83.2908 98.7724L83.5805 115.256V115.377L83.5927 116.056V116.059L84.1538 148.189L84.2117 151.382L85.3704 217.787L85.3826 218.427Z" fill="#3F3D56" />
              <path d="M91.6061 144.272L82.0522 149.293L83.3837 151.818L92.9375 146.796L91.6061 144.272Z" fill="#3F3D56" />
              <path d="M81.1228 230.042H53.871V230.65H81.1228V230.042Z" fill="#CBCBCB" />
              <path d="M131.131 240.391H103.879V241H131.131V240.391Z" fill="#CBCBCB" />
              <path d="M208.887 232.477H181.635V233.086H208.887V232.477Z" fill="#CBCBCB" />
              <path d="M196.44 207.706V189.997C196.44 189.997 203.353 202.552 196.44 207.706Z" fill="#F1F1F1" />
              <path d="M196.867 207.703L183.8 195.727C183.8 195.727 197.739 199.133 196.867 207.703Z" fill="#F1F1F1" />
              <path d="M61.3573 211.967V194.259C61.3573 194.259 68.2703 206.813 61.3573 211.967Z" fill="#F1F1F1" />
              <path d="M61.7844 211.964L48.717 199.989C48.717 199.989 62.6563 203.395 61.7844 211.964Z" fill="#F1F1F1" />
              <path d="M108.316 224.752V202.732C108.316 202.732 116.913 218.343 108.316 224.752Z" fill="#F1F1F1" />
              <path d="M108.847 224.748L92.5977 209.857C92.5977 209.857 109.931 214.092 108.847 224.748Z" fill="#F1F1F1" />
              <path d="M248 222.058L247.832 222.646L196.657 208.095L158.105 216.579L108.801 224.986L108.734 224.968L85.3826 218.427L79.4792 216.774L61.4489 211.721L46.4099 215.066L42.0128 216.043L32.4534 218.171L32.3223 217.577L42.022 215.419L46.4007 214.445L61.4672 211.094L61.5404 211.112L79.4914 216.141L85.3704 217.787L108.831 224.362L157.986 215.982L196.675 207.468L196.751 207.486L248 222.058Z" fill="#CBCBCB" />
              <path d="M156.443 36.9656L160.345 33.8506C157.314 33.5168 156.068 35.1669 155.559 36.473C153.191 35.4915 150.613 36.7778 150.613 36.7778L158.419 39.6068C158.026 38.5568 157.34 37.6406 156.443 36.9656Z" fill="#3F3D56" />
              <path d="M13.1274 35.7481L17.0289 32.633C13.998 32.2992 12.7527 33.9493 12.243 35.2554C9.87518 34.2739 7.29749 35.5602 7.29749 35.5602L15.1036 38.3893C14.7098 37.3392 14.0243 36.423 13.1274 35.7481Z" fill="#3F3D56" />
              <path d="M147.905 95.1064L151.807 91.9913C148.776 91.6575 147.53 93.3076 147.021 94.6137C144.653 93.6322 142.075 94.9186 142.075 94.9186L149.881 97.7476C149.488 96.6975 148.802 95.7813 147.905 95.1064Z" fill="#3F3D56" />
              <path d="M121.408 229.086L124.39 230.192L130.082 219.237L125.681 217.604L121.408 229.086Z" fill="#FFB7B7" />
              <path d="M121.009 227.832L126.882 230.01L126.882 230.01C127.875 230.378 128.68 231.125 129.121 232.086C129.562 233.047 129.603 234.143 129.234 235.134L129.189 235.256L119.574 231.689L121.009 227.832Z" fill="#2F2E41" />
              <path d="M150.753 232.177L153.934 232.177L155.448 219.929L150.753 219.929L150.753 232.177Z" fill="#FFB7B7" />
              <path d="M150.201 231.141L156.466 231.14H156.466C157.525 231.14 158.541 231.56 159.289 232.308C160.038 233.055 160.459 234.069 160.459 235.126V235.255L150.202 235.256L150.201 231.141Z" fill="#2F2E41" />
              <path d="M136.19 147.228L137.227 145.156L146.049 149.559L145.79 151.373L147.476 153.574C147.476 153.574 150.331 155.128 149.812 160.309L149.293 165.23L148.644 171.576L153.185 187.247L155.52 207.969L157.207 224.676L149.033 224.287L141.509 197.09L128.276 226.359L119.194 224.028L131.649 195.018L133.206 182.844C133.206 182.844 132.168 176.368 137.098 171.965L136.319 169.634V166.761L133.725 153.056L136.19 147.228Z" fill="#2F2E41" />
              <path opacity="0.2" d="M135.947 176.845L135.654 176.928L141.362 197.131L141.655 197.049L135.947 176.845Z" fill="black" />
              <path d="M136.449 172.871H149.163V171.576H136.449V172.871Z" fill="#3F3D56" />
              <path d="M149.163 173.648C149.45 173.648 149.682 173.069 149.682 172.353C149.682 171.638 149.45 171.058 149.163 171.058C148.876 171.058 148.644 171.638 148.644 172.353C148.644 173.069 148.876 173.648 149.163 173.648Z" fill="#3F3D56" />
              <path d="M149.498 141.132C151.33 137.786 150.099 133.591 146.747 131.762C143.395 129.933 139.193 131.162 137.361 134.508C135.529 137.854 136.76 142.049 140.112 143.878C143.464 145.707 147.666 144.478 149.498 141.132Z" fill="#FFB7B7" />
              <path d="M132.846 135.355C136.225 135.355 138.965 132.621 138.965 129.247C138.965 125.874 136.225 123.139 132.846 123.139C129.467 123.139 126.727 125.874 126.727 129.247C126.727 132.621 129.467 135.355 132.846 135.355Z" fill="#2F2E41" />
              <path d="M125.081 128.593C124.84 129.402 124.769 130.253 124.874 131.091C124.978 131.929 125.256 132.736 125.689 133.461C126.121 134.187 126.7 134.815 127.388 135.306C128.077 135.797 128.859 136.14 129.687 136.313C130.515 136.487 131.37 136.488 132.198 136.315C133.026 136.142 133.809 135.8 134.498 135.31C135.186 134.82 135.766 134.192 136.2 133.467C136.633 132.742 136.912 131.936 137.017 131.098C136.579 132.567 135.603 133.818 134.283 134.603C132.964 135.387 131.397 135.647 129.894 135.332C128.391 135.017 127.062 134.148 126.17 132.9C125.279 131.652 124.89 130.114 125.081 128.593Z" fill="#2F2E41" />
              <path d="M149.253 135.903C149.433 137.482 149.086 139.076 148.266 140.438C147.446 141.8 146.199 142.854 144.718 143.436C143.237 144.019 141.605 144.098 140.075 143.661C138.545 143.223 137.202 142.295 136.254 141.018C135.306 139.741 134.806 138.188 134.832 136.6C134.858 135.011 135.408 133.475 136.398 132.23C137.387 130.985 138.759 130.101 140.303 129.714C141.847 129.326 143.476 129.458 144.937 130.089C146.145 129.116 147.643 129.418 148.861 130.444C150.238 131.605 150.647 132.403 151.715 134.312C150.665 134.459 150.304 135.756 149.253 135.903Z" fill="#2F2E41" />
              <path d="M123.831 156.667C123.908 158.713 124.061 162.74 124.061 162.946C124.061 163.163 127.12 169.485 128.441 172.205V172.207C128.535 172.399 128.62 172.572 128.694 172.726C128.796 172.937 128.957 173.114 129.157 173.237C129.357 173.36 129.589 173.423 129.823 173.418L135.598 173.315C135.915 173.309 136.218 173.182 136.444 172.959C136.669 172.735 136.799 172.434 136.807 172.117L137.451 146.756C137.454 146.672 137.439 146.589 137.408 146.511C137.378 146.433 137.332 146.362 137.273 146.302C137.215 146.242 137.145 146.195 137.068 146.162C136.991 146.13 136.908 146.113 136.824 146.113H129.377C129.062 146.113 128.754 146.202 128.488 146.369C128.221 146.535 128.007 146.774 127.87 147.057L124.296 154.438C123.961 155.132 123.801 155.897 123.831 156.667V156.667Z" fill="black" />
              <path d="M136.908 170.377C138.389 169.48 139.721 168.357 140.853 167.048C143.484 164.094 145.085 160.367 145.414 156.428C145.707 153.057 145.037 150.552 143.422 148.981C141.37 146.985 138.576 147.275 138.458 147.288L138.333 147.302L136.44 148.901L136.976 149.533L138.669 148.103C139.188 148.077 141.304 148.071 142.85 149.581C144.274 150.971 144.858 153.25 144.587 156.356C144.274 160.107 142.755 163.656 140.255 166.474C139.177 167.719 137.913 168.791 136.507 169.652L136.908 170.377Z" fill="black" />
              <path d="M126.162 160.742L126.107 161.012L136.196 163.081L136.252 162.81L126.162 160.742Z" fill="#3F3D56" />
              <path d="M132.812 146.107L132.157 162.134L132.433 162.146L133.089 146.119L132.812 146.107Z" fill="#3F3D56" />
              <path d="M123.831 156.667C123.908 158.713 124.061 162.74 124.061 162.946C124.061 163.162 127.12 169.485 128.441 172.205L125.978 157.929C125.883 157.38 125.643 156.866 125.284 156.439C124.924 156.013 124.457 155.689 123.931 155.502C123.849 155.884 123.815 156.276 123.831 156.667Z" fill="#3F3D56" />
              <path d="M138.963 186.586C138.745 186.305 138.591 185.98 138.512 185.634C138.434 185.288 138.432 184.929 138.507 184.582C138.583 184.235 138.733 183.908 138.949 183.626C139.164 183.343 139.439 183.111 139.754 182.946L139.254 177.418L142.544 176.295L143.141 184.112C143.384 184.658 143.417 185.275 143.235 185.844C143.053 186.414 142.668 186.897 142.153 187.202C141.638 187.507 141.029 187.612 140.441 187.499C139.853 187.385 139.327 187.06 138.963 186.586Z" fill="#FFB7B7" />
              <path d="M136.809 153.223C136.745 152.384 136.962 151.547 137.427 150.845C137.892 150.142 138.578 149.615 139.377 149.345C140.081 149.112 140.842 149.113 141.546 149.346C142.299 149.603 142.952 150.089 143.414 150.736C143.875 151.383 144.121 152.159 144.117 152.953L144.364 181.026L138.533 181.237L136.809 153.223Z" fill="#CBCBCB" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="248" height="241" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div>

          <h1>Olá, me chamo Gabriel</h1>
          <p>Sou desenvolvedor há mais de três anos, sempre buscando o máximo de conhecimento possivel que possa aprimorar meu trabalho. Sou cursado em diversos cursos, tenho experiência com projetos freelancers, ou com empresas de grande porte.</p>

        </div>

      </about>

      <projects id="projects">

        {projects.map((a, i) => (

          <box key={i}>

            <h1>{a.name.charAt(0).toUpperCase()}{a.name.slice(1)}</h1>
            <p>{a.description}</p>

            <a onClick={() => window.location.replace(a.html_url)}>

              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.15174 0C5.27595 0 5.39508 0.0493429 5.48291 0.137174C5.57074 0.225005 5.62008 0.344129 5.62008 0.46834V2.3417C5.62008 2.46591 5.57074 2.58504 5.48291 2.67287C5.39508 2.7607 5.27595 2.81004 5.15174 2.81004C5.02753 2.81004 4.90841 2.7607 4.82058 2.67287C4.73274 2.58504 4.6834 2.46591 4.6834 2.3417V0.46834C4.6834 0.344129 4.73274 0.225005 4.82058 0.137174C4.90841 0.0493429 5.02753 0 5.15174 0ZM1.50806 1.50806C1.55156 1.46444 1.60324 1.42984 1.66014 1.40623C1.71704 1.38262 1.77804 1.37046 1.83964 1.37046C1.90124 1.37046 1.96224 1.38262 2.01914 1.40623C2.07604 1.42984 2.12772 1.46444 2.17123 1.50806L3.49569 2.83346C3.54042 2.87666 3.5761 2.92834 3.60065 2.98548C3.62519 3.04262 3.63811 3.10407 3.63865 3.16626C3.63919 3.22845 3.62734 3.29012 3.60379 3.34767C3.58025 3.40523 3.54547 3.45752 3.5015 3.5015C3.45752 3.54547 3.40523 3.58025 3.34767 3.60379C3.29012 3.62734 3.22845 3.63919 3.16626 3.63865C3.10407 3.63811 3.04262 3.62519 2.98548 3.60065C2.92834 3.5761 2.87666 3.54042 2.83346 3.49569L1.50899 2.17123C1.42119 2.0834 1.37187 1.9643 1.37187 1.84011C1.37187 1.71592 1.42119 1.59682 1.50899 1.50899L1.50806 1.50806ZM8.79543 1.50806C8.83904 1.55156 8.87365 1.60324 8.89726 1.66014C8.92087 1.71704 8.93302 1.77804 8.93302 1.83964C8.93302 1.90124 8.92087 1.96224 8.89726 2.01914C8.87365 2.07604 8.83904 2.12772 8.79543 2.17123L7.46909 3.49569C7.42589 3.54042 7.37421 3.5761 7.31707 3.60065C7.25993 3.62519 7.19847 3.63811 7.13629 3.63865C7.0741 3.63919 7.01243 3.62734 6.95487 3.60379C6.89732 3.58025 6.84502 3.54547 6.80105 3.5015C6.75708 3.45752 6.7223 3.40523 6.69875 3.34767C6.6752 3.29012 6.66336 3.22845 6.6639 3.16626C6.66444 3.10407 6.67736 3.04262 6.7019 2.98548C6.72645 2.92834 6.76213 2.87666 6.80686 2.83346L8.13132 1.50899C8.21915 1.42119 8.33825 1.37187 8.46244 1.37187C8.58663 1.37187 8.70573 1.42119 8.79356 1.50899L8.79543 1.50806ZM0 5.15174C0 5.02753 0.0493429 4.90841 0.137174 4.82058C0.225005 4.73274 0.344129 4.6834 0.46834 4.6834H2.3417C2.46591 4.6834 2.58504 4.73274 2.67287 4.82058C2.7607 4.90841 2.81004 5.02753 2.81004 5.15174C2.81004 5.27595 2.7607 5.39508 2.67287 5.48291C2.58504 5.57074 2.46591 5.62008 2.3417 5.62008H0.46834C0.344129 5.62008 0.225005 5.57074 0.137174 5.48291C0.0493429 5.39508 0 5.27595 0 5.15174ZM5.15174 5.65006V14.3237C5.15158 14.4165 5.17895 14.5072 5.2304 14.5844C5.28185 14.6615 5.35506 14.7217 5.44074 14.7572C5.52642 14.7927 5.62072 14.802 5.71168 14.7838C5.80264 14.7657 5.88617 14.721 5.95167 14.6553L8.34957 12.2574C8.70081 11.9061 9.17723 11.7086 9.67404 11.7085H12.7014C12.7986 11.7084 12.8934 11.6781 12.9726 11.6217C13.0518 11.5654 13.1115 11.4857 13.1434 11.3939C13.1753 11.3021 13.1779 11.2026 13.1507 11.1092C13.1235 11.0159 13.068 10.9333 12.9918 10.873L5.91045 5.28194C5.84138 5.22736 5.75832 5.19335 5.6708 5.18382C5.58328 5.17428 5.49485 5.18961 5.41564 5.22804C5.33644 5.26647 5.26967 5.32644 5.22299 5.40109C5.17631 5.47573 5.15162 5.56202 5.15174 5.65006Z" fill="white" />
              </svg>

              Visualizar

            </a>

          </box>

        ))}

      </projects>
      <experiences id="experiences">

        <box>

          <div className={styles.top}>

            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4545 7.8C10.4545 6.76566 10.8951 5.77368 11.6794 5.04228C12.4636 4.31089 13.5273 3.9 14.6364 3.9C15.1909 3.9 15.7227 3.69455 16.1149 3.32886C16.507 2.96316 16.7273 2.46717 16.7273 1.95C16.7273 1.43283 16.507 0.936838 16.1149 0.571142C15.7227 0.205446 15.1909 0 14.6364 0C12.4182 0 10.2909 0.821783 8.72238 2.28457C7.15389 3.74735 6.27273 5.73131 6.27273 7.8V13.65C6.27273 14.6843 5.83214 15.6763 5.0479 16.4077C4.26366 17.1391 3.2 17.55 2.09091 17.55C1.53637 17.55 1.00453 17.7554 0.612413 18.1211C0.220291 18.4868 0 18.9828 0 19.5C0 20.0172 0.220291 20.5132 0.612413 20.8789C1.00453 21.2446 1.53637 21.45 2.09091 21.45C3.2 21.45 4.26366 21.8609 5.0479 22.5923C5.83214 23.3237 6.27273 24.3157 6.27273 25.35V31.2C6.27273 33.2687 7.15389 35.2526 8.72238 36.7154C10.2909 38.1782 12.4182 39 14.6364 39C15.1909 39 15.7227 38.7946 16.1149 38.4289C16.507 38.0632 16.7273 37.5672 16.7273 37.05C16.7273 36.5328 16.507 36.0368 16.1149 35.6711C15.7227 35.3054 15.1909 35.1 14.6364 35.1C13.5273 35.1 12.4636 34.6891 11.6794 33.9577C10.8951 33.2263 10.4545 32.2343 10.4545 31.2V25.35C10.4478 24.2395 10.1869 23.1432 9.68933 22.1343C9.19172 21.1255 8.46885 20.2273 7.56909 19.5C8.46885 18.7727 9.19172 17.8745 9.68933 16.8657C10.1869 15.8568 10.4478 14.7605 10.4545 13.65V7.8ZM43.9091 17.55C42.8 17.55 41.7363 17.1391 40.9521 16.4077C40.1679 15.6763 39.7273 14.6843 39.7273 13.65V7.8C39.7273 5.73131 38.8461 3.74735 37.2776 2.28457C35.7091 0.821783 33.5818 0 31.3636 0C30.8091 0 30.2773 0.205446 29.8851 0.571142C29.493 0.936838 29.2727 1.43283 29.2727 1.95C29.2727 2.46717 29.493 2.96316 29.8851 3.32886C30.2773 3.69455 30.8091 3.9 31.3636 3.9C32.4727 3.9 33.5364 4.31089 34.3206 5.04228C35.1049 5.77368 35.5455 6.76566 35.5455 7.8V13.65C35.5522 14.7605 35.8131 15.8568 36.3107 16.8657C36.8083 17.8745 37.5311 18.7727 38.4309 19.5C37.5311 20.2273 36.8083 21.1255 36.3107 22.1343C35.8131 23.1432 35.5522 24.2395 35.5455 25.35V31.2C35.5455 32.2343 35.1049 33.2263 34.3206 33.9577C33.5364 34.6891 32.4727 35.1 31.3636 35.1C30.8091 35.1 30.2773 35.3054 29.8851 35.6711C29.493 36.0368 29.2727 36.5328 29.2727 37.05C29.2727 37.5672 29.493 38.0632 29.8851 38.4289C30.2773 38.7946 30.8091 39 31.3636 39C33.5818 39 35.7091 38.1782 37.2776 36.7154C38.8461 35.2526 39.7273 33.2687 39.7273 31.2V25.35C39.7273 24.3157 40.1679 23.3237 40.9521 22.5923C41.7363 21.8609 42.8 21.45 43.9091 21.45C44.4636 21.45 44.9955 21.2446 45.3876 20.8789C45.7797 20.5132 46 20.0172 46 19.5C46 18.9828 45.7797 18.4868 45.3876 18.1211C44.9955 17.7554 44.4636 17.55 43.9091 17.55Z" fill="black" />
            </svg>

            <h1>FrontEnd Developer</h1>

          </div>
          <div className={styles.bottom}>

            <ul>

              <li>

                <div>

                  <h1>React</h1>
                  <h1>90%</h1>

                </div>
                <div>

                  <progress value="90" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Next.JS</h1>
                  <h1>70%</h1>

                </div>
                <div>

                  <progress value="70" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>HTML</h1>
                  <h1>90%</h1>

                </div>
                <div>

                  <progress value="90" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>CSS</h1>
                  <h1>85%</h1>

                </div>
                <div>

                  <progress value="85" max="100"></progress>

                </div>

              </li>

            </ul>

          </div>
        </box>
        <box>

          <div className={styles.top}>

            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4545 7.8C10.4545 6.76566 10.8951 5.77368 11.6794 5.04228C12.4636 4.31089 13.5273 3.9 14.6364 3.9C15.1909 3.9 15.7227 3.69455 16.1149 3.32886C16.507 2.96316 16.7273 2.46717 16.7273 1.95C16.7273 1.43283 16.507 0.936838 16.1149 0.571142C15.7227 0.205446 15.1909 0 14.6364 0C12.4182 0 10.2909 0.821783 8.72238 2.28457C7.15389 3.74735 6.27273 5.73131 6.27273 7.8V13.65C6.27273 14.6843 5.83214 15.6763 5.0479 16.4077C4.26366 17.1391 3.2 17.55 2.09091 17.55C1.53637 17.55 1.00453 17.7554 0.612413 18.1211C0.220291 18.4868 0 18.9828 0 19.5C0 20.0172 0.220291 20.5132 0.612413 20.8789C1.00453 21.2446 1.53637 21.45 2.09091 21.45C3.2 21.45 4.26366 21.8609 5.0479 22.5923C5.83214 23.3237 6.27273 24.3157 6.27273 25.35V31.2C6.27273 33.2687 7.15389 35.2526 8.72238 36.7154C10.2909 38.1782 12.4182 39 14.6364 39C15.1909 39 15.7227 38.7946 16.1149 38.4289C16.507 38.0632 16.7273 37.5672 16.7273 37.05C16.7273 36.5328 16.507 36.0368 16.1149 35.6711C15.7227 35.3054 15.1909 35.1 14.6364 35.1C13.5273 35.1 12.4636 34.6891 11.6794 33.9577C10.8951 33.2263 10.4545 32.2343 10.4545 31.2V25.35C10.4478 24.2395 10.1869 23.1432 9.68933 22.1343C9.19172 21.1255 8.46885 20.2273 7.56909 19.5C8.46885 18.7727 9.19172 17.8745 9.68933 16.8657C10.1869 15.8568 10.4478 14.7605 10.4545 13.65V7.8ZM43.9091 17.55C42.8 17.55 41.7363 17.1391 40.9521 16.4077C40.1679 15.6763 39.7273 14.6843 39.7273 13.65V7.8C39.7273 5.73131 38.8461 3.74735 37.2776 2.28457C35.7091 0.821783 33.5818 0 31.3636 0C30.8091 0 30.2773 0.205446 29.8851 0.571142C29.493 0.936838 29.2727 1.43283 29.2727 1.95C29.2727 2.46717 29.493 2.96316 29.8851 3.32886C30.2773 3.69455 30.8091 3.9 31.3636 3.9C32.4727 3.9 33.5364 4.31089 34.3206 5.04228C35.1049 5.77368 35.5455 6.76566 35.5455 7.8V13.65C35.5522 14.7605 35.8131 15.8568 36.3107 16.8657C36.8083 17.8745 37.5311 18.7727 38.4309 19.5C37.5311 20.2273 36.8083 21.1255 36.3107 22.1343C35.8131 23.1432 35.5522 24.2395 35.5455 25.35V31.2C35.5455 32.2343 35.1049 33.2263 34.3206 33.9577C33.5364 34.6891 32.4727 35.1 31.3636 35.1C30.8091 35.1 30.2773 35.3054 29.8851 35.6711C29.493 36.0368 29.2727 36.5328 29.2727 37.05C29.2727 37.5672 29.493 38.0632 29.8851 38.4289C30.2773 38.7946 30.8091 39 31.3636 39C33.5818 39 35.7091 38.1782 37.2776 36.7154C38.8461 35.2526 39.7273 33.2687 39.7273 31.2V25.35C39.7273 24.3157 40.1679 23.3237 40.9521 22.5923C41.7363 21.8609 42.8 21.45 43.9091 21.45C44.4636 21.45 44.9955 21.2446 45.3876 20.8789C45.7797 20.5132 46 20.0172 46 19.5C46 18.9828 45.7797 18.4868 45.3876 18.1211C44.9955 17.7554 44.4636 17.55 43.9091 17.55Z" fill="black" />
            </svg>

            <h1>BackEnd Developer</h1>

          </div>
          <div className={styles.bottom}>

            <ul>

              <li>

                <div>

                  <h1>Express</h1>
                  <h1>90%</h1>

                </div>
                <div>

                  <progress value="90" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Discord.JS</h1>
                  <h1>70%</h1>

                </div>
                <div>

                  <progress value="70" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Electron</h1>
                  <h1>50%</h1>

                </div>
                <div>

                  <progress value="50" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Whatsapp API</h1>
                  <h1>70%</h1>

                </div>
                <div>

                  <progress value="70" max="100"></progress>

                </div>

              </li>

            </ul>

          </div>
        </box>
        <box>

          <div className={styles.top}>

            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4545 7.8C10.4545 6.76566 10.8951 5.77368 11.6794 5.04228C12.4636 4.31089 13.5273 3.9 14.6364 3.9C15.1909 3.9 15.7227 3.69455 16.1149 3.32886C16.507 2.96316 16.7273 2.46717 16.7273 1.95C16.7273 1.43283 16.507 0.936838 16.1149 0.571142C15.7227 0.205446 15.1909 0 14.6364 0C12.4182 0 10.2909 0.821783 8.72238 2.28457C7.15389 3.74735 6.27273 5.73131 6.27273 7.8V13.65C6.27273 14.6843 5.83214 15.6763 5.0479 16.4077C4.26366 17.1391 3.2 17.55 2.09091 17.55C1.53637 17.55 1.00453 17.7554 0.612413 18.1211C0.220291 18.4868 0 18.9828 0 19.5C0 20.0172 0.220291 20.5132 0.612413 20.8789C1.00453 21.2446 1.53637 21.45 2.09091 21.45C3.2 21.45 4.26366 21.8609 5.0479 22.5923C5.83214 23.3237 6.27273 24.3157 6.27273 25.35V31.2C6.27273 33.2687 7.15389 35.2526 8.72238 36.7154C10.2909 38.1782 12.4182 39 14.6364 39C15.1909 39 15.7227 38.7946 16.1149 38.4289C16.507 38.0632 16.7273 37.5672 16.7273 37.05C16.7273 36.5328 16.507 36.0368 16.1149 35.6711C15.7227 35.3054 15.1909 35.1 14.6364 35.1C13.5273 35.1 12.4636 34.6891 11.6794 33.9577C10.8951 33.2263 10.4545 32.2343 10.4545 31.2V25.35C10.4478 24.2395 10.1869 23.1432 9.68933 22.1343C9.19172 21.1255 8.46885 20.2273 7.56909 19.5C8.46885 18.7727 9.19172 17.8745 9.68933 16.8657C10.1869 15.8568 10.4478 14.7605 10.4545 13.65V7.8ZM43.9091 17.55C42.8 17.55 41.7363 17.1391 40.9521 16.4077C40.1679 15.6763 39.7273 14.6843 39.7273 13.65V7.8C39.7273 5.73131 38.8461 3.74735 37.2776 2.28457C35.7091 0.821783 33.5818 0 31.3636 0C30.8091 0 30.2773 0.205446 29.8851 0.571142C29.493 0.936838 29.2727 1.43283 29.2727 1.95C29.2727 2.46717 29.493 2.96316 29.8851 3.32886C30.2773 3.69455 30.8091 3.9 31.3636 3.9C32.4727 3.9 33.5364 4.31089 34.3206 5.04228C35.1049 5.77368 35.5455 6.76566 35.5455 7.8V13.65C35.5522 14.7605 35.8131 15.8568 36.3107 16.8657C36.8083 17.8745 37.5311 18.7727 38.4309 19.5C37.5311 20.2273 36.8083 21.1255 36.3107 22.1343C35.8131 23.1432 35.5522 24.2395 35.5455 25.35V31.2C35.5455 32.2343 35.1049 33.2263 34.3206 33.9577C33.5364 34.6891 32.4727 35.1 31.3636 35.1C30.8091 35.1 30.2773 35.3054 29.8851 35.6711C29.493 36.0368 29.2727 36.5328 29.2727 37.05C29.2727 37.5672 29.493 38.0632 29.8851 38.4289C30.2773 38.7946 30.8091 39 31.3636 39C33.5818 39 35.7091 38.1782 37.2776 36.7154C38.8461 35.2526 39.7273 33.2687 39.7273 31.2V25.35C39.7273 24.3157 40.1679 23.3237 40.9521 22.5923C41.7363 21.8609 42.8 21.45 43.9091 21.45C44.4636 21.45 44.9955 21.2446 45.3876 20.8789C45.7797 20.5132 46 20.0172 46 19.5C46 18.9828 45.7797 18.4868 45.3876 18.1211C44.9955 17.7554 44.4636 17.55 43.9091 17.55Z" fill="black" />
            </svg>

            <h1>Linguagens</h1>

          </div>
          <div className={styles.bottom}>

            <ul>

              <li>

                <div>

                  <h1>Português</h1>
                  <h1>100%</h1>

                </div>
                <div>

                  <progress value="100" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Inglês</h1>
                  <h1>30%</h1>

                </div>
                <div>

                  <progress value="30" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Espanhol</h1>
                  <h1>10%</h1>

                </div>
                <div>

                  <progress value="10" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Japonês</h1>
                  <h1>5%</h1>

                </div>
                <div>

                  <progress value="3" max="100"></progress>

                </div>

              </li>

            </ul>

          </div>
        </box>
        <box>

          <div className={styles.top}>

            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4545 7.8C10.4545 6.76566 10.8951 5.77368 11.6794 5.04228C12.4636 4.31089 13.5273 3.9 14.6364 3.9C15.1909 3.9 15.7227 3.69455 16.1149 3.32886C16.507 2.96316 16.7273 2.46717 16.7273 1.95C16.7273 1.43283 16.507 0.936838 16.1149 0.571142C15.7227 0.205446 15.1909 0 14.6364 0C12.4182 0 10.2909 0.821783 8.72238 2.28457C7.15389 3.74735 6.27273 5.73131 6.27273 7.8V13.65C6.27273 14.6843 5.83214 15.6763 5.0479 16.4077C4.26366 17.1391 3.2 17.55 2.09091 17.55C1.53637 17.55 1.00453 17.7554 0.612413 18.1211C0.220291 18.4868 0 18.9828 0 19.5C0 20.0172 0.220291 20.5132 0.612413 20.8789C1.00453 21.2446 1.53637 21.45 2.09091 21.45C3.2 21.45 4.26366 21.8609 5.0479 22.5923C5.83214 23.3237 6.27273 24.3157 6.27273 25.35V31.2C6.27273 33.2687 7.15389 35.2526 8.72238 36.7154C10.2909 38.1782 12.4182 39 14.6364 39C15.1909 39 15.7227 38.7946 16.1149 38.4289C16.507 38.0632 16.7273 37.5672 16.7273 37.05C16.7273 36.5328 16.507 36.0368 16.1149 35.6711C15.7227 35.3054 15.1909 35.1 14.6364 35.1C13.5273 35.1 12.4636 34.6891 11.6794 33.9577C10.8951 33.2263 10.4545 32.2343 10.4545 31.2V25.35C10.4478 24.2395 10.1869 23.1432 9.68933 22.1343C9.19172 21.1255 8.46885 20.2273 7.56909 19.5C8.46885 18.7727 9.19172 17.8745 9.68933 16.8657C10.1869 15.8568 10.4478 14.7605 10.4545 13.65V7.8ZM43.9091 17.55C42.8 17.55 41.7363 17.1391 40.9521 16.4077C40.1679 15.6763 39.7273 14.6843 39.7273 13.65V7.8C39.7273 5.73131 38.8461 3.74735 37.2776 2.28457C35.7091 0.821783 33.5818 0 31.3636 0C30.8091 0 30.2773 0.205446 29.8851 0.571142C29.493 0.936838 29.2727 1.43283 29.2727 1.95C29.2727 2.46717 29.493 2.96316 29.8851 3.32886C30.2773 3.69455 30.8091 3.9 31.3636 3.9C32.4727 3.9 33.5364 4.31089 34.3206 5.04228C35.1049 5.77368 35.5455 6.76566 35.5455 7.8V13.65C35.5522 14.7605 35.8131 15.8568 36.3107 16.8657C36.8083 17.8745 37.5311 18.7727 38.4309 19.5C37.5311 20.2273 36.8083 21.1255 36.3107 22.1343C35.8131 23.1432 35.5522 24.2395 35.5455 25.35V31.2C35.5455 32.2343 35.1049 33.2263 34.3206 33.9577C33.5364 34.6891 32.4727 35.1 31.3636 35.1C30.8091 35.1 30.2773 35.3054 29.8851 35.6711C29.493 36.0368 29.2727 36.5328 29.2727 37.05C29.2727 37.5672 29.493 38.0632 29.8851 38.4289C30.2773 38.7946 30.8091 39 31.3636 39C33.5818 39 35.7091 38.1782 37.2776 36.7154C38.8461 35.2526 39.7273 33.2687 39.7273 31.2V25.35C39.7273 24.3157 40.1679 23.3237 40.9521 22.5923C41.7363 21.8609 42.8 21.45 43.9091 21.45C44.4636 21.45 44.9955 21.2446 45.3876 20.8789C45.7797 20.5132 46 20.0172 46 19.5C46 18.9828 45.7797 18.4868 45.3876 18.1211C44.9955 17.7554 44.4636 17.55 43.9091 17.55Z" fill="black" />
            </svg>

            <h1>UI/UX Design</h1>

          </div>
          <div className={styles.bottom}>

            <ul>

              <li>

                <div>

                  <h1>Figma</h1>
                  <h1>70%</h1>

                </div>
                <div>

                  <progress value="70" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Adobe XD</h1>
                  <h1>30%</h1>

                </div>
                <div>

                  <progress value="30" max="100"></progress>

                </div>

              </li>
              <li>

                <div>

                  <h1>Sketch</h1>
                  <h1>0%</h1>

                </div>
                <div>

                  <progress value="0" max="100"></progress>

                </div>

              </li>

            </ul>

          </div>
        </box>

      </experiences>
      <contact id="contact">

        <h1>Gabriel</h1>
        <div>

          <svg onClick={(c) => window.location.replace("https://web.whatsapp.com/send?phone=+5511950845254&text=Ol%C3%A1,%20desejo%20fazer%20um%20or%C3%A7amento")} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97004 9.862 9.84604 9.961 9.64704C10.061 9.44904 10.011 9.27604 9.936 9.12704C9.862 8.97804 9.268 7.51504 9.02 6.92004C8.779 6.34104 8.534 6.42004 8.352 6.41004C8.178 6.40204 7.98 6.40004 7.782 6.40004C7.584 6.40004 7.262 6.47404 6.99 6.77204C6.717 7.06904 5.95 7.78804 5.95 9.25104C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7854 8.48037 21.3094 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44304 6.544 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90704C19.9054 5.82362 20.6349 6.91361 21.1313 8.11394C21.6277 9.31427 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785V21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.900841C15.1039 0.302105 13.5553 -0.00407625 11.992 4.09775e-05C5.438 4.09775e-05 0.102 5.33504 0.1 11.892C0.099 13.988 0.646 16.034 1.687 17.837L0 24L6.304 22.346C8.04787 23.2962 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79014 22.9874 7.34607C22.3901 5.90201 21.5124 4.59071 20.405 3.48804" fill="black" />
          </svg>


          <svg onClick={(c) => window.location.replace("https://twitter.com/gbKKKKKJ")} width="50" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.7356 5.93091C60.4285 6.93316 57.9501 7.61035 55.3447 7.91645C58.033 6.33938 60.0443 3.85725 61.0032 0.933223C58.4774 2.40406 55.7131 3.43937 52.8304 3.99414C50.8918 1.9649 48.3242 0.619888 45.526 0.167923C42.7279 -0.284042 39.8558 0.182327 37.3558 1.49462C34.8557 2.80692 32.8674 4.89172 31.6998 7.42535C30.5321 9.95899 30.2503 12.7997 30.8981 15.5064C25.7802 15.2545 20.7736 13.9504 16.2031 11.6787C11.6326 9.40698 7.60044 6.21848 4.36823 2.32012C3.26304 4.18917 2.62757 6.35619 2.62757 8.66407C2.62633 10.7417 3.1482 12.7875 4.14685 14.6199C5.14551 16.4524 6.59008 18.0149 8.3524 19.1687C6.30858 19.1049 4.30985 18.5635 2.52257 17.5895V17.752C2.52237 20.6659 3.55048 23.4902 5.43247 25.7456C7.31445 28.001 9.93439 29.5485 12.8477 30.1257C10.9517 30.6288 8.96395 30.7029 7.03447 30.3424C7.85644 32.8497 9.45757 35.0422 11.6137 36.613C13.7698 38.1838 16.373 39.0543 19.0588 39.1026C14.4995 42.6116 8.86876 44.5149 3.0724 44.5066C2.04564 44.5069 1.01974 44.4481 0 44.3305C5.88364 48.0393 12.7326 50.0076 19.7275 50C43.406 50 56.3504 30.7731 56.3504 14.0979C56.3504 13.5561 56.3366 13.0089 56.3117 12.4672C58.8296 10.682 61.0029 8.47146 62.73 5.93904L62.7356 5.93091Z" fill="black" />
          </svg>

          <svg onClick={(c) => window.location.replace("https://www.instagram.com/https.gbxxy/")} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9933 16.6631C20.4028 16.6631 16.6566 20.4094 16.6566 25C16.6566 29.5906 20.4028 33.3369 24.9933 33.3369C29.5838 33.3369 33.33 29.5906 33.33 25C33.33 20.4094 29.5838 16.6631 24.9933 16.6631ZM49.9972 25C49.9972 21.5477 50.0285 18.1266 49.8346 14.6805C49.6407 10.6778 48.7276 7.12542 45.8007 4.19845C42.8675 1.26521 39.3214 0.358351 35.3188 0.16447C31.8665 -0.0294109 28.4455 0.00186028 24.9995 0.00186028C21.5473 0.00186028 18.1263 -0.0294109 14.6803 0.16447C10.6776 0.358351 7.12529 1.27147 4.19837 4.19845C1.26519 7.13168 0.358344 10.6778 0.164467 14.6805C-0.0294104 18.1329 0.00186025 21.5539 0.00186025 25C0.00186025 28.4461 -0.0294104 31.8734 0.164467 35.3195C0.358344 39.3222 1.27144 42.8746 4.19837 45.8016C7.13154 48.7348 10.6776 49.6417 14.6803 49.8355C18.1325 50.0294 21.5535 49.9981 24.9995 49.9981C28.4518 49.9981 31.8728 50.0294 35.3188 49.8355C39.3214 49.6417 42.8738 48.7285 45.8007 45.8016C48.7339 42.8683 49.6407 39.3222 49.8346 35.3195C50.0347 31.8734 49.9972 28.4523 49.9972 25ZM24.9933 37.8274C17.8949 37.8274 12.1661 32.0985 12.1661 25C12.1661 17.9015 17.8949 12.1726 24.9933 12.1726C32.0917 12.1726 37.8205 17.9015 37.8205 25C37.8205 32.0985 32.0917 37.8274 24.9933 37.8274ZM38.3458 14.643C36.6885 14.643 35.3501 13.3046 35.3501 11.6472C35.3501 9.98986 36.6885 8.65145 38.3458 8.65145C40.0031 8.65145 41.3415 9.98986 41.3415 11.6472C41.342 12.0408 41.2649 12.4306 41.1145 12.7942C40.9641 13.1579 40.7435 13.4884 40.4652 13.7667C40.1869 14.0449 39.8565 14.2656 39.4928 14.416C39.1291 14.5663 38.7393 14.6435 38.3458 14.643Z" fill="black" />
          </svg>

        </div>

      </contact>

    </div>
  )
}


export const getStaticProps = async () => {

  const data = await fetch("https://api.github.com/users/gbxxy/repos")
  const res = await data.json()

  return {
    props: {
      projects: res
    },
    revalidate: 3600
  }

}