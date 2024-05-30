import { PageServerLoad } from '@analogjs/router';

export async function load({ params }: PageServerLoad) {
  // https://www.learnwithjason.dev/api/v2/episode/analogjs-is-the-full-stack-meta-framework-for-angular
  const response = await fetch(
    `https://www.learnwithjason.dev/api/v2/episode/${params['slug']}`
  );
  const data = await response.json();

  return data;
}
