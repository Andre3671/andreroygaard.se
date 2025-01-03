<script lang="ts">
import { ref, onBeforeMount, onMounted } from "vue";
import { useTimeAgo } from "@vueuse/core";
import { useI18n } from "vue-i18n";

// Define the shape of each item in the data array
interface RepoItem {
  name: string;
  html_url: string;
  pushed_at: string;
}

// Custom function to handle localized time ago
export function useLocaleTimeAgo(date: Date) {
  const { t } = useI18n();

  const I18N_MESSAGES = {
    justNow: t("common.timeAgo.just-now"),
    past: (n: string) => (n.match(/\d/) ? t("common.timeAgo.ago", [n]) : n),
    future: (n: string) => (n.match(/\d/) ? t("common.timeAgo.in", [n]) : n),
    month: (n: number, past: boolean) =>
      n === 1
        ? past
          ? t("common.timeAgo.last-month")
          : t("common.timeAgo.next-month")
        : `${n} ${t("common.timeAgo.month", n)}`,
    year: (n: number, past: boolean) =>
      n === 1
        ? past
          ? t("common.timeAgo.last-year")
          : t("common.timeAgo.next-year")
        : `${n} ${t("common.timeAgo.year", n)}`,
    day: (n: number, past: boolean) =>
      n === 1
        ? past
          ? t("common.timeAgo.yesterday")
          : t("common.timeAgo.tomorrow")
        : `${n} ${t("common.timeAgo.day", n)}`,
    week: (n: number, past: boolean) =>
      n === 1
        ? past
          ? t("common.timeAgo.last-week")
          : t("common.timeAgo.next-week")
        : `${n} ${t("common.timeAgo.week", n)}`,
    hour: (n: number) => `${n} ${t("common.timeAgo.hour", n)}`,
    minute: (n: number) => `${n} ${t("common.timeAgo.minute", n)}`,
    second: (n: number) => `${n} ${t("common.timeAgo.second", n)}`,
    invalid: "",
  };

  return useTimeAgo(date, {
    fullDateFormatter: (date: Date) => date.toLocaleDateString(),
    messages: I18N_MESSAGES,
  });
}

export default {
  setup() {
    const data = ref<RepoItem[]>([]);

    // Fetch GitHub repos on mount
    onBeforeMount(async () => {
      const response = await fetch("https://api.github.com/users/andre3671/repos");
      data.value = await response.json();
    });

    // Function to format time ago
    const formatTimeAgo = (updatedAt: string) => {
      try {
        return useLocaleTimeAgo(new Date(updatedAt)).value;
      } catch (error) {
        console.error("Error formatting time:", error);
        return "Okänt datum"; // Fallback for errors
      }
    };

    // Check if the date is older than one year
    const isMoreThanAYear = (dateStr: string) => {
      const date = new Date(dateStr);
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      return date < oneYearAgo;  // Corrected comparison (older than a year)
    };

    return {
      data,
      formatTimeAgo,
      isMoreThanAYear
    };
  },
};
</script>

<template>
  <div class="ProjectContainer">
    <div id="projecthead">
      <h1>Aktiva projekt</h1>
    </div>
    <div id="projectwrapper">
      <!-- Only show items older than a year -->
      <a 
        :href="item.html_url" 
        v-for="item in data"
        :key="item.name"
      >
        <div class="project">
          <p>{{ item.name }}</p>
          <p>Senast uppdaterad:</p>
          <p>{{ formatTimeAgo(item.pushed_at) }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.ProjectContainer {
  width: 100%;
  height: 100vh;
  padding: 5rem;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  flex-direction: column;
}

#projecthead {
  width: 100%;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
}

#projectwrapper {
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.project {
  width: 16rem;
  height: 7rem;
  border-radius: 0.5rem;
  background-color: black;
  color: whitesmoke;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
