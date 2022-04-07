import { useState } from "react";
import {
	ActionFunction,
	Form,
	LoaderFunction,
	redirect,
	useActionData,
	useLoaderData,
} from "remix";
import { App, Container, Header } from "~/components/";
import { getAppData } from "~/lib/app.server";
import { AppDataType } from "~/types";

export const loader: LoaderFunction = async () => {
	let data = getAppData();
	return data;
};

export const action: ActionFunction = async ({ request }) => {
	const data = Object.fromEntries(await request.formData());

	if (!data.tamanho) {
		return { error: "Selecione o tamanho" };
	}
	if (!data.massa) {
		return { error: "Selecione a massa" };
	}
	if (!data.recheio) {
		return { error: "Selecione o recheio" };
	}
	if (!data.cobertura) {
		return { error: "Selecione a cobertura" };
	}

	// 5588992358601;

	return redirect(
		`https://api.whatsapp.com/send/?phone=%2B5588992358601&text=%2AE+N+C+O+M+E+N+D+A%2A+%0A%0A+Tamanho%3A+%2A${data.tamanho}%2A+%0A+Massa%3A+%2A${data.massa}%2A+%0A+Recheio%3A+%2A${data.recheio}%2A+%0A+Cobertura%3A+%2A${data.cobertura}%2A+%0A&app_absent=0`
	);
};

export default function () {
	let { app, container, header } = useLoaderData<AppDataType>();
	let actionData = useActionData();

	let [bolo, setBolo] = useState<{
		tamanho?: string;
		massa?: string;
		recheio?: string;
		cobertura?: string;
	}>();

	return (
		<App className={app.className}>
			<Container
				className={`${container && container.className} max-w-xl py-8`}
			>
				<>
					<div className="content">
						<Header {...header}></Header>

						<Form method="post" className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-brand-4">
									Faça a sua encomenda
								</h3>
								<p>Escolha as opções do seu bolo</p>
							</div>
							<div>
								<h4 className="text-xl font-bold text-brand-4">
									Tamanho
								</h4>
								<Pick
									name="tamanho"
									handleChange={(value: string) =>
										setBolo({ ...bolo, tamanho: value })
									}
									items={[
										{
											name: "<h5>PP</h5><span>8 Fatias<span>",
											value: "PP",
										},
										{
											name: "<h5>P</h5><span>15 Fatias<span>",
											value: "P",
										},
										{
											name: "<h5>M</h5><span>25 Fatias<span>",
											value: "M",
										},
										{
											name: "<h5>G</h5><span>35 Fatias<span>",
											value: "G",
										},
									]}
								/>
							</div>
							<div>
								<h4 className="text-xl font-bold text-brand-4">
									Massa
								</h4>
								<Pick
									handleChange={(value: string) =>
										setBolo({ ...bolo, massa: value })
									}
									name="massa"
									items={[
										{
											name: "<h5>Branca</h5>",
											value: "Branca",
										},
										{
											name: "<h5>Preta</h5>",
											value: "Preta",
										},
										{
											name: "<h5>Maria Celeste</h5><span>Branca e Preta<span>",
											value: "Maria Celeste",
											size: "col-span-6",
										},
									]}
								/>
							</div>
							<div>
								<h4 className="text-xl font-bold text-brand-4">
									Recheio
								</h4>
								<div className="text-xs">
									Para adicionar mais recheios, fale com nosso
									consultor no final da encomenda.
								</div>
								<h5 className="mt-4 font-bold uppercase">
									Tradicionais
								</h5>
								<Pick
									handleChange={(value: string) =>
										setBolo({ ...bolo, recheio: value })
									}
									name="recheio"
									items={[
										{
											name: "<h5>Brigadeiro</h5>",
											value: "Brigadeiro",
											size: "col-span-4",
										},
										{
											name: "<h5>Beijinho</h5>",
											value: "Beijinho",
											size: "col-span-4",
										},
										{
											name: "<h5>Ninho</h5>",
											value: "Ninho",
											size: "col-span-4",
										},
										{
											name: "<h5>Doce de Leite</h5>",
											value: "Doce de Leite",
											size: "col-span-6",
										},
										{
											name: "<h5>Leite Condensado</h5>",
											value: "Leite Condensado",
											size: "col-span-6",
										},
										{
											name: "<h5>Doce de Leite com Crocante</h5>",
											value: "Doce de Leite com Crocante",
											size: "col-span-6",
										},
										{
											name: "<h5>Leite Condensado com Crocante</h5>",
											value: "Leite Condensado com Crocante",
											size: "col-span-6",
										},
									]}
								/>
								<h5 className="mt-8 font-bold uppercase">
									Especiais
								</h5>
								<Pick
									handleChange={(value: string) =>
										setBolo({ ...bolo, recheio: value })
									}
									name="recheio"
									items={[
										{
											name: "<h5>Ninho com Nutela</h5>",
											value: "Ninho com Nutela",
											size: "col-span-6",
										},
										{
											name: "<h5>Kit Kat</h5>",
											value: "Kit Kat",
											size: "col-span-6",
										},
									]}
								/>
							</div>
							<div>
								<h4 className="text-xl font-bold text-brand-4">
									Cobertura
								</h4>
								<Pick
									handleChange={(value: string) =>
										setBolo({ ...bolo, cobertura: value })
									}
									name="cobertura"
									items={[
										{
											name: "<h5>Brigadeiro</h5>",
											value: "Brigadeiro",
											size: "col-span-6",
										},
										{
											name: "<h5>Ninho</h5>",
											value: "Ninho",
											size: "col-span-6",
										},
										{
											name: "<h5>Leite Condensado</h5>",
											value: "Leite Condensado",
											size: "col-span-6",
										},
										{
											name: "<h5>Leite Condensado com Crocante</h5>",
											value: "Leite Condensado com Crocante",
											size: "col-span-6",
										},
										{
											name: "<h5>Doce de Leite</h5>",
											value: "Doce de Leite",
											size: "col-span-6",
										},
										{
											name: "<h5>Beijinho</h5>",
											value: "Beijinho",
											size: "col-span-6",
										},
									]}
								/>
							</div>

							<div>
								<div className="mt-4 rounded-xl bg-brand-1 py-4 px-8">
									<h3 className="mb-4 text-2xl font-bold text-brand-4">
										Confira o seu pedido
									</h3>
									<div className="flex justify-between border-t border-brand-2 py-4">
										<div className="font-medium uppercase">
											Tamanho
										</div>
										<div className="font-bold">
											{bolo && bolo.tamanho
												? bolo.tamanho
												: "Selecione o tamanho"}
										</div>
									</div>
									<div className="flex justify-between border-t border-brand-2 py-4">
										<div className="font-medium uppercase">
											Massa
										</div>
										<div className="font-bold">
											{bolo && bolo.massa
												? bolo.massa
												: "Selecione a massa"}
										</div>
									</div>
									<div className="flex justify-between border-t border-brand-2 py-4">
										<div className="font-medium uppercase">
											Recheio
										</div>
										<div className="font-bold">
											{bolo && bolo.recheio
												? bolo.recheio
												: "Selecione o recheio"}
										</div>
									</div>
									<div className="flex justify-between border-t border-brand-2 py-4">
										<div className="font-medium uppercase">
											Cobertura
										</div>
										<div className="font-bold">
											{bolo && bolo.cobertura
												? bolo.cobertura
												: "Selecione o cobertura"}
										</div>
									</div>
								</div>
							</div>
							{actionData && actionData.error && (
								<div className="rounded bg-red-500 p-2 text-center font-bold text-white">
									{actionData.error}
								</div>
							)}
							<div className="text-center">
								<button
									className="button button-primary"
									type="submit"
								>
									Solicitar Orçamento
								</button>
								<div className="mt-2 text-xs">
									Retornaremos o seu contato confirmando a sua
									encomenda.
								</div>
							</div>
						</Form>
					</div>
				</>
			</Container>
		</App>
	);
}

const Pick = ({
	name,
	items,
	handleChange,
}: {
	name: string;
	items: Array<{
		name: string;
		value: string;
		size?: "col-span-3" | "col-span-4" | "col-span-6" | "col-span-12";
	}>;
	handleChange: any;
}) => (
	<div className="mt-4 grid grid-cols-12 gap-2">
		{items.map((item) => (
			<label key={item.value} className={`${item.size ?? "col-span-3"}`}>
				<input
					type="radio"
					name={name}
					value={item.value}
					onChange={() => handleChange(item.value)}
				/>
				<div className="input-radio">
					{/<.*>/.test(item.name) ? (
						<div
							dangerouslySetInnerHTML={{ __html: item.name }}
						></div>
					) : (
						item.name
					)}
				</div>
			</label>
		))}
	</div>
);
