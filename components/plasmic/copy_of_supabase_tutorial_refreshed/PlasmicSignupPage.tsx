// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x43pEJN2k2QkoGRM4VhiXy
// Component: h0iysITfPYd7

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { SupabaseUserSignUp } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: lOB5qiwL82Hi/codeComponent
import { FormContextComponent } from "../../CodeComponents/Form"; // plasmic-import: zdydibl_QRnc/codeComponent
import { FormTextInput } from "../../CodeComponents/Form"; // plasmic-import: Mv8Ma1gxUCkw/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: 0yhLkRbRp4aL/component
import Button from "../../Button"; // plasmic-import: 2cx-U1hY5Rzc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase_tutorial_refreshed.module.css"; // plasmic-import: x43pEJN2k2QkoGRM4VhiXy/projectcss
import sty from "./PlasmicSignupPage.module.css"; // plasmic-import: h0iysITfPYd7/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 2SZIg4XMUDTg/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: yadOrbmQWTQp/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 0Y5d3IkdXMyo/icon

createPlasmicElementProxy;

export type PlasmicSignupPage__VariantMembers = {};
export type PlasmicSignupPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignupPage__VariantsArgs;
export const PlasmicSignupPage__VariantProps = new Array<VariantPropType>();

export type PlasmicSignupPage__ArgsType = {};
type ArgPropType = keyof PlasmicSignupPage__ArgsType;
export const PlasmicSignupPage__ArgProps = new Array<ArgPropType>();

export type PlasmicSignupPage__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  supabaseUserSignUp?: p.Flex<typeof SupabaseUserSignUp>;
  formContext?: p.Flex<typeof FormContextComponent>;
  textInput?: p.Flex<typeof TextInput>;
  textInput2?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSignupPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignupPage__RenderFunc(props: {
  variants: PlasmicSignupPage__VariantsArgs;
  args: PlasmicSignupPage__ArgsType;
  overrides: PlasmicSignupPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jyjfU)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"200px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/copy_of_supabase_tutorial_refreshed/images/pokemonLogopng.png",
                fullWidth: 800,
                fullHeight: 450,
                aspectRatio: undefined
              }}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jOpCn)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vxtR)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Pokedex on Supabase"}
                </div>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"Sign up"}
                </h2>
              </p.Stack>
              <SupabaseUserSignUp
                data-plasmic-name={"supabaseUserSignUp"}
                data-plasmic-override={overrides.supabaseUserSignUp}
                className={classNames("__wab_instance", sty.supabaseUserSignUp)}
                redirectOnSuccess={"/"}
              >
                <FormContextComponent
                  data-plasmic-name={"formContext"}
                  data-plasmic-override={overrides.formContext}
                  className={classNames("__wab_instance", sty.formContext)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__txo2F)}
                  >
                    <FormTextInput
                      className={classNames(
                        "__wab_instance",
                        sty.formTextInput__iQbF
                      )}
                      name={"email"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput"}
                        data-plasmic-override={overrides.textInput}
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "textInput",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={"Email"}
                        value={
                          p.generateStateValueProp($state, [
                            "textInput",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormTextInput>
                    <FormTextInput
                      className={classNames(
                        "__wab_instance",
                        sty.formTextInput__spcen
                      )}
                      name={"password"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput2"}
                        data-plasmic-override={overrides.textInput2}
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "textInput2",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={"Password"}
                        type={"password"}
                        value={
                          p.generateStateValueProp($state, [
                            "textInput2",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormTextInput>
                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      color={"green"}
                      submitsForm={true}
                    >
                      {"Sign up"}
                    </Button>
                  </p.Stack>
                </FormContextComponent>
              </SupabaseUserSignUp>
            </p.Stack>
            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              component={Link}
              href={`/login-page`}
              platform={"nextjs"}
            >
              {"Already have an account? Log in"}
            </p.PlasmicLink>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "text",
    "h2",
    "supabaseUserSignUp",
    "formContext",
    "textInput",
    "textInput2",
    "button",
    "link"
  ],
  img: ["img"],
  text: ["text"],
  h2: ["h2"],
  supabaseUserSignUp: [
    "supabaseUserSignUp",
    "formContext",
    "textInput",
    "textInput2",
    "button"
  ],
  formContext: ["formContext", "textInput", "textInput2", "button"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  button: ["button"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  text: "div";
  h2: "h2";
  supabaseUserSignUp: typeof SupabaseUserSignUp;
  formContext: typeof FormContextComponent;
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  button: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignupPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignupPage__VariantsArgs;
    args?: PlasmicSignupPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignupPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignupPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignupPage__ArgProps,
          internalVariantPropNames: PlasmicSignupPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignupPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignupPage";
  } else {
    func.displayName = `PlasmicSignupPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSignupPage = Object.assign(
  // Top-level PlasmicSignupPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    h2: makeNodeComponent("h2"),
    supabaseUserSignUp: makeNodeComponent("supabaseUserSignUp"),
    formContext: makeNodeComponent("formContext"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSignupPage
    internalVariantProps: PlasmicSignupPage__VariantProps,
    internalArgProps: PlasmicSignupPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignupPage;
/* prettier-ignore-end */