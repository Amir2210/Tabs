import { useEffect } from 'react'
import { useState } from 'react'
import { JobCompanies } from './cmps/JobCompanies'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState(null)
  useEffect(() => {
    fetchData()
  }, [])
  async function fetchData() {
    const data = await fetch(url)
    const jobs = await data.json()
    setJobs(jobs)
  }
  return (
    <section className='jobs-center'>
      <JobCompanies />
    </section>
  )
}
export default App
