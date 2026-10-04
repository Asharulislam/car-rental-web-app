import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import TextField from "../../component/TextField";
import AppImages from "../../constants/AppImages";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import { login } from "../../services/authService";
import { isLoggedIn } from "../../services/authStorage";
import { USE_MOCK_API } from "../../services/api";
import { DEMO_PASSWORD, DEMO_USERNAME } from "../../services/mockApi";

const strings = AppStrings.admin.login;

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Already logged in → skip the login screen
  if (isLoggedIn()) {
    return <Navigate to={AppRoutes.admin} replace />;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    setIsLoading(true);
    setError("");
    try {
      await login(String(form.get("username")), String(form.get("password")));
      navigate(AppRoutes.admin, { replace: true });
    } catch {
      setError(strings.failed);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-100 bg-white rounded-[20px] p-8 sm:p-10 flex flex-col gap-6">
        <div className="text-center">
          <img src={AppImages.logo} alt={AppStrings.appName} className="size-12 mx-auto" />
          <Heading level={3} className="mt-4">{strings.title}</Heading>
          <Text variant="muted" className="mt-1">{strings.subtitle}</Text>
        </div>

        <TextField label={strings.username} name="username" autoComplete="username" required />
        <TextField label={strings.password} name="password" type="password" autoComplete="current-password" required />

        {/* Only shown in demo mode, so the demo login can be found */}
        {USE_MOCK_API && (
          <Text variant="small" className="rounded-xl bg-secondary/15 px-4 py-3 text-center">
            {strings.demoHint} <b>{DEMO_USERNAME}</b> / <b>{DEMO_PASSWORD}</b>
          </Text>
        )}

        {error && <Text variant="small" className="text-red-600">{error}</Text>}

        <Button type="submit" size="lg" fullWidth disabled={isLoading}>
          {isLoading ? strings.loading : strings.submit}
        </Button>
      </form>
    </div>
  );
}
