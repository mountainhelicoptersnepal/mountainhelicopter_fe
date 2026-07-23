import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Parked for the later dynamic/admin phase.
    "context/**",
    "provider/**",
    "redux/**",
    "redux-store/**",
    "types/**",
    "components/shared/**",
    "components/ui/alert-dialog.tsx",
    "components/ui/avatar.tsx",
    "components/ui/badge.tsx",
    "components/ui/border-beam.tsx",
    "components/ui/breadcrumb.tsx",
    "components/ui/button.tsx",
    "components/ui/card.tsx",
    "components/ui/checkbox.tsx",
    "components/ui/field.tsx",
    "components/ui/input.tsx",
    "components/ui/label.tsx",
    "components/ui/multi-select.tsx",
    "components/ui/pagination.tsx",
    "components/ui/select.tsx",
    "components/ui/separator.tsx",
    "components/ui/sheet.tsx",
    "components/ui/sidebar.tsx",
    "components/ui/skeleton.tsx",
    "components/ui/sonner.tsx",
    "components/ui/switch.tsx",
    "components/ui/table.tsx",
    "components/ui/tabs.tsx",
    "components/ui/textarea.tsx",
    "components/ui/tooltip.tsx",
  ]),
]);

export default eslintConfig;
