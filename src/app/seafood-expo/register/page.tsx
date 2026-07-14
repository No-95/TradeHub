"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const initialForm = {
  companyName: "",
  businessField: "",
  mainProducts: "",
  currentMarkets: "",
  website: "",
  contactName: "",
  position: "",
  phone: "",
  email: "",
  goals: [] as string[],
  exportReadiness: "",
  interestedPackage: "",
  expectedTiming: "",
  expectations: "",
}

const goalOptions = [
  "Understand the Korea market",
  "Meet buyers and distributors",
  "Test live commerce",
  "Find long-term partners",
]

export default function Page() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateField = (field: string, value: string | string[]) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const toggleGoal = (goal: string) => {
    setFormData((current) => {
      const selected = current.goals.includes(goal)
      return {
        ...current,
        goals: selected ? current.goals.filter((item) => item !== goal) : [...current.goals, goal],
      }
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/seafood-expo/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Unable to submit seafood registration.")
      }

      setIsSuccess(true)
    } catch (error) {
      console.error(error)
      alert(error instanceof Error ? error.message : "Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-950">Seafood registration received</h1>
          <p className="mt-4 text-slate-600">Thank you for registering. We will follow up with the next steps shortly.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/seafood-expo" className="inline-flex justify-center rounded-full bg-cyan-500 px-6 py-3 text-white hover:bg-cyan-600 transition">
              Back to Seafood Expo
            </Link>
            <Link href="/seafood-expo" className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
              View Event Info
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/seafood-expo" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition">
            <ArrowLeft className="h-4 w-4" /> Back to Seafood Expo
          </Link>
          <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">Seafood Expo Registration</div>
        </div>

        <h1 className="text-3xl font-bold text-slate-950">Register your company</h1>
        <p className="mt-3 text-slate-600">Submit your seafood capabilities and market interests for partner matching.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Company Name</span>
              <input
                value={formData.companyName}
                onChange={(event) => updateField("companyName", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Business Field</span>
              <input
                value={formData.businessField}
                onChange={(event) => updateField("businessField", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Main Products</span>
              <input
                value={formData.mainProducts}
                onChange={(event) => updateField("mainProducts", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Current Markets</span>
              <input
                value={formData.currentMarkets}
                onChange={(event) => updateField("currentMarkets", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Website</span>
              <input
                value={formData.website}
                onChange={(event) => updateField("website", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Contact Name</span>
              <input
                value={formData.contactName}
                onChange={(event) => updateField("contactName", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Phone</span>
              <input
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="space-y-2 text-sm text-slate-700">
            <span>Goals</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {goalOptions.map((goal) => (
                <label key={goal} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => toggleGoal(goal)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="text-slate-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="space-y-2 text-sm text-slate-700 block">
            <span>Interested package</span>
            <select
              value={formData.interestedPackage}
              onChange={(event) => updateField("interestedPackage", event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
            >
              <option value="">Select a package</option>
              <option value="core">CORE</option>
              <option value="trade">TRADE</option>
              <option value="market-entry">MARKET ENTRY</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-700 block">
            <span>Expected timing</span>
            <input
              value={formData.expectedTiming}
                onChange={(event) => updateField("expectedTiming", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
              />
          </label>

          <label className="space-y-2 text-sm text-slate-700 block">
            <span>Expectations</span>
            <textarea
              value={formData.expectations}
              onChange={(event) => updateField("expectations", event.target.value)}
              rows={4}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isSubmitting ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </div>
  )
}
