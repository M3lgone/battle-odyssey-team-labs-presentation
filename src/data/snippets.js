export const SNIPPETS = {
  carryover: {
    label: 'REACT · ENTRE BATALLAS',
    file: 'battle-odyssey-front/src/pages/BetweenBattlesPage.jsx:65–69',
    code: `await createBattle(gameId, {\n  character_current_hp: playerStatus.currentHp,\n  character_current_mp: playerStatus.currentMp,\n});\nnavigate(\`/battle/\${gameId}\`);`,
  },
  service: {
    label: 'LARAVEL · BATTLE SERVICE',
    file: 'battle-odyssey-api/app/Services/BattleService.php:60–65',
    code: `'character_current_hp' => $characterCurrentHp !== null\n    ? min($characterCurrentHp, $character->max_health_points)\n    : $character->max_health_points,\n'character_current_mp' => $characterCurrentMp !== null\n    ? min($characterCurrentMp, $character->max_magic_points)\n    : $character->max_magic_points,`,
  },
  test: {
    label: 'PEST · COMPROBACIÓN DE INTEGRACIÓN',
    file: 'battle-odyssey-api/tests/Feature/Battle/BattleCreateTest.php:334–336',
    code: `$response->assertStatus(201)\n    ->assertJsonFragment(['character_current_hp' => 45])\n    ->assertJsonFragment(['character_current_mp' => 30]);`,
  },
}
