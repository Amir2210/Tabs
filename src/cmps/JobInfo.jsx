export function JobInfo({ jobs, company }) {
  const filteredJob = jobs.filter(job => job.company === company)
  console.log(filteredJob)
  return (
    <article className='job-info'>

    </article>
  )
}