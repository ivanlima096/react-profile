import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.containerFather}>
      <div className={styles.container}>
        <img src={props.avatar} alt={props.name} className={styles.avatar} />
        <h2 className={styles.name}>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
        <div className={styles.links}>
          <a href={props.githubUrl} target="_blank">Github</a>
          <a href={props.linkedinUrl} target="_blank">linkedin</a>
          <a href={props.instagramUrl} target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  )
}