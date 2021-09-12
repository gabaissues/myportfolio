
import React from 'react'

import styles from '../../styles/ViewPage.module.scss'
import type { NextPage } from 'next'

import { useRouter} from 'next/router'

const ViewPage: NextPage = () => {
    const router = useRouter()

    const [time, setTime] = React.useState('0min')
    const [url, setUrl] = React.useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
    const [github, setGithub] = React.useState('')
    
    const [name, setName] = React.useState('...')

    const [theme, setTheme] = React.useState('light')

    const handleChangeTheme = () => {

        if (theme === 'light') {

            localStorage.setItem('@theme', 'dark')
            setTheme('dark')

        } else {

            localStorage.setItem('@theme', 'light')
            setTheme('light')

        }

    }

    React.useEffect(() => {

        const data = localStorage.getItem('@theme')
        if (data) {

            setTheme(data)

        } else setTheme('light')

        const RenderContent = async (): Promise<void> => {

            if(!router.query.name) return;

            const data = await fetch(`https://api.gbxxy.com/projects/${router.query.name}`)
            const res = await data.json()

            setUrl(`https://api.gbxxy.com/videos/${res.project.name}.mp4`)
            setName(res.project.name)

            setGithub(res.project.url)
            setTime(res.project.time)

        }
        RenderContent()

    }, [router.query.name])

    return (
        <div className={`${theme === 'light' ? styles.light : styles.dark} ${styles.container}`}>

            <div className={styles.navbar}>
                <h1>Gabriel</h1>

                <div>

                    <a onClick={(c) => router.push('/')}>Início</a>
                    <a onClick={(c) => router.push('/')}>Sobre</a>
                    <a onClick={(c) => router.push('/')}>Projetos</a>
                    <a onClick={(c) => router.push('/')}>Experiência</a>

                    <svg onClick={handleChangeTheme} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM12 20.5V3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12C20.5 14.2543 19.6045 16.4163 18.0104 18.0104C16.4163 19.6045 14.2543 20.5 12 20.5V20.5Z" fill="black" />
                    </svg>

                </div>

            </div>

            <main>

                <video controls src={url} />

                <div className={styles.info}>

                    <div className={styles.details}>

                        <h1>{name}</h1>

                        <div>

                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8611 1.81319C14.4073 1.36458 13.8106 1.08917 13.1748 1.03482C12.539 0.980474 11.9042 1.15062 11.3809 1.51569C13.0633 2.21616 14.4377 3.49836 15.2531 5.12819C15.5678 4.61137 15.7003 4.00397 15.6292 3.40305C15.5582 2.80212 15.2877 2.24235 14.8611 1.81319Z" fill="black" />
                                <path d="M5.39263 1.61987C4.87141 1.20591 4.21669 0.997058 3.55203 1.03273C2.88738 1.06839 2.25877 1.34612 1.78485 1.81348C1.31484 2.28661 1.03647 2.91689 1.00334 3.58296C0.970208 4.24904 1.18466 4.90383 1.60541 5.42126C2.3631 3.73544 3.70965 2.38386 5.39263 1.61987Z" fill="black" />
                                <path d="M7.74442 1.93127C6.51151 2.0753 5.34404 2.56352 4.37564 3.34007C3.40724 4.11662 2.67703 5.15011 2.26857 6.32228C1.86011 7.49445 1.7899 8.75794 2.06599 9.96815C2.34207 11.1784 2.95329 12.2864 3.8297 13.1654L2.62553 14.3696C2.58181 14.4143 2.54732 14.4671 2.52401 14.5251C2.50071 14.583 2.48905 14.645 2.48971 14.7075C2.49037 14.77 2.50332 14.8318 2.52784 14.8892C2.55236 14.9467 2.58797 14.9988 2.63262 15.0425C2.67726 15.0862 2.73009 15.1207 2.78807 15.144C2.84605 15.1673 2.90805 15.179 2.97054 15.1783C3.03303 15.1777 3.09477 15.1647 3.15225 15.1402C3.20973 15.1157 3.26181 15.0801 3.30553 15.0354L4.56164 13.7793C5.71034 14.6486 7.11309 15.1158 8.55359 15.109C9.99409 15.1022 11.3923 14.6217 12.5328 13.7416L13.8266 15.0354C13.917 15.1128 14.0332 15.1532 14.152 15.1486C14.2709 15.144 14.3836 15.0948 14.4677 15.0107C14.5518 14.9266 14.6011 14.8138 14.6057 14.695C14.6103 14.5761 14.5698 14.4599 14.4925 14.3696L13.2222 13.1182C14.1754 12.1418 14.8032 10.8943 15.0192 9.54687C15.2353 8.19948 15.0292 6.81824 14.4291 5.59268C13.8289 4.36712 12.8643 3.35728 11.6675 2.70174C10.4706 2.04619 9.10028 1.77706 7.74442 1.93127ZM9.24609 14.1193C8.07242 14.2731 6.88008 14.0554 5.83644 13.4969C4.7928 12.9384 3.95025 12.0671 3.42707 11.0053C2.90389 9.94347 2.72635 8.74449 2.91936 7.57664C3.11237 6.4088 3.66625 5.33071 4.50325 4.49371C5.34024 3.65672 6.41833 3.10284 7.58618 2.90982C8.75403 2.71681 9.953 2.89436 11.0148 3.41754C12.0766 3.94071 12.9479 4.78326 13.5064 5.8269C14.0649 6.87054 14.2826 8.06288 14.1289 9.23655C13.9667 10.4747 13.4001 11.6246 12.5171 12.5076C11.6341 13.3906 10.4842 13.9572 9.24609 14.1193Z" fill="black" />
                                <path d="M11.7683 9.60493L8.90664 8.18826V4.48604C8.90664 4.37332 8.86186 4.26522 8.78216 4.18551C8.70246 4.10581 8.59436 4.06104 8.48164 4.06104C8.36892 4.06104 8.26082 4.10581 8.18112 4.18551C8.10142 4.26522 8.05664 4.37332 8.05664 4.48604V8.73604L11.3905 10.3888C11.492 10.4383 11.6089 10.4454 11.7156 10.4087C11.8223 10.3719 11.9101 10.2943 11.9596 10.1928C12.009 10.0914 12.0162 9.97446 11.9794 9.86774C11.9427 9.76103 11.865 9.67329 11.7636 9.62381L11.7683 9.60493Z" fill="black" />
                            </svg>

                            <h1>Tempo trabalhado: {time}</h1>

                        </div>

                    </div>
                    <a onClick={((c) => router.push(github))}>Visualizar no github</a>

                </div>

            </main>
        </div>
    )
}

export default ViewPage