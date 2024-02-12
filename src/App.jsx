import { useEffect } from 'react'
import { useState } from 'react'
import { JobCompanies } from './cmps/JobCompanies'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState(null)
  const [company, setCompany] = useState('TOMMY')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch(url)
    const jobs = await data.json()
    setJobs(jobs)
  }

  function onChangeCompany(company) {
    setCompany(company)
  }
  if (!jobs) return <div>Loading...</div>
  return (
    <section className='jobs-center'>
      <JobCompanies jobs={jobs} company={company} onChangeCompany={onChangeCompany} />
    </section>
  )
}
export default App
