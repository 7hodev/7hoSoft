import styles from "./styles.module.css"
import { ArrowUpRight, Clock, Package, DollarSign } from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Ventas Totales",
      value: "43",
      change: "+20%",
      icon: <DollarSign className={styles.cardIcon} />,
    },
    {
      title: "En Proceso",
      value: "14",
      change: "+12%",
      icon: <Clock className={styles.cardIcon} />,
    },
    {
      title: "Completados",
      value: "11",
      icon: <Package className={styles.cardIcon} />,
    },
  ]

  return (
    <div className={styles.dashboard}>
      <section className={styles.overallInfo}>
        <div className={styles.sectionHeader}>
          <h2>Overall Information</h2>
          <button className={styles.menuButton}>•••</button>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              {stat.icon}
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statTitle}>{stat.title}</div>
              {stat.change && (
                <div className={styles.statChange}>
                  {stat.change}
                  <ArrowUpRight className={styles.trendIcon} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.weeklyProgress}>
        <div className={styles.sectionHeader}>
          <h2>Weekly Progress</h2>
          <Clock className={styles.headerIcon} />
        </div>
        <div className={styles.chartPlaceholder}>Gráfico de progreso semanal</div>
      </section>

      <section className={styles.monthProgress}>
        <div className={styles.sectionHeader}>
          <h2>Month Progress</h2>
          <button className={styles.downloadButton}>Download Report</button>
        </div>
      </section>
    </div>
  )
}

