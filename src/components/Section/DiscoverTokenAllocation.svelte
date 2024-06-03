<script lang="ts">
  import SectionContainer from '$components/Container/SectionContainer.svelte';
  import Button from '$components/Button/Button.svelte';
</script>

<SectionContainer flexDirection={'column'} backgroundColor="none">
  <div class="px-[14px] lg:px-0 w-full">
    <!-- Airdrop Allocation only shown after timer runs out -->
    <div class="flex flex-col lg:flex-row w-full gap-4 place-content-between pb-8">
      <div class="flex flex-col h-full gap-8 w-full">
        <div>
          <div
            class="lg:block body-bold text-[18px]/[24px] text-center lg:text-left lg:text-[22px]/[26px] tracking-[1.1px] text-secondary-brand">
            GITHUB CONTRIBUTORS
          </div>
          <div class="display-small-medium text-center lg:text-left">Maximize your token potential</div>
        </div>
        <div class="flex justify-between w-full">
          <div class="body-regular text-center lg:text-start lg:w-[665px] break-keep">
            Are you a GitHub contributor? Combine your GitHub account with your wallet to unlock full access to your
            token allocation. By linking both accounts, not only will your token amounts be consolidated, but you’ll
            also potentially increase your total tokens.
          </div>
          <a class="hidden lg:block" href="#">
            <Button buttonText={'Claim TKO'} arrow={'right'} />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col box-border w-full lg:flex-row gap-4 break-keep text-center lg:text-left">
    <div data-glow-border class="w-full">
      <div class="bg-container w-full h-full rounded-[20px] p-2">
        <div class="blur-edges-x f-center overflow-visible">
          <img class="blur-edges-y rounded-2xl" src="/../../../sign_in_to_github_no_border.png" alt="connect-to-github" />
        </div>
        <div class="flex flex-col p-4 gap-4">
          <div class="title-screen-bold">Connect your Github account</div>
          <div class="body-regular text-secondary-content">
            Begin your airdrop registration by linking your Github account securely.
          </div>
        </div>
      </div>
    </div>
    <div data-glow-border class="w-full">
      <div class="bg-container w-full h-full rounded-[20px] p-2">
        <div class="blur-edges-x f-center">
          <img class="blur-edges-y rounded-2xl" src="/connect_your_wallet_no_border.png" alt="connect-wallet" />
        </div>
        <div class="flex flex-col p-4 pb-16 gap-4">
          <div class="title-screen-bold">Connect your wallet</div>
          <div class="body-regular text-secondary-content">
            Proceed to link your preferred wallet address to finalize your airdrop registration.
          </div>
        </div>
      </div>
    </div>
    <div data-glow-border class="w-full">
      <div class="bg-container w-full h-full rounded-[20px] p-2">
        <div class="blur-edges-x f-center">
          <img class="blur-edges-y rounded-2xl" src="/bind_your_account_no_border.png" alt="bind-github" />
        </div>
        <div class="flex flex-col p-4 gap-4">
          <div class="title-screen-bold">Bind your account</div>
          <div class="body-regular text-secondary-content">
            Complete the registration by binding your connected GitHub and wallet account together.
          </div>
        </div>
      </div>
    </div>
    <a class="lg:hidden pt-8" href="#">
      <Button buttonText={'Claim TKO'} arrow={'right'} />
    </a>
  </div>
</SectionContainer>
