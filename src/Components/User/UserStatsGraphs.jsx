import React, { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryBar, VictoryChart, VictoryPie } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(data
      .map(({ acessos }) => Number(acessos))
      .reduce((ant, prox) => ant + prox, 0)
    )

    setGraph(graphData)
  }, [data])

  if(total){
    return (
      <section className={`animeLeft`}>
        <div className={styles.total}>
          <p>Acessos: {total}</p>
        </div>
  
        <div className={styles.graph}>
          <div className={styles.item}>
            <VictoryPie data={graph} innerRadius={60} />
          </div>
  
          <div className={styles.item}>
            <VictoryChart>
              <VictoryBar data={graph} alignment='start'></VictoryBar>
            </VictoryChart>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className={`animeLeft`}>
        <div className={styles.total}>
          <p>Sem nenhum acesso no momento</p>
        </div>
      </section>
    )
  }
  
}

export default UserStatsGraphs